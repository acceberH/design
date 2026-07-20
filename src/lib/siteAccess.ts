const encoder = new TextEncoder();

type SessionPayload = {
  exp: number;
};

const toBase64Url = (value: Uint8Array) => {
  let binary = "";
  value.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
};

const fromBase64Url = (value: string) => {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
  const binary = atob(padded);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
};

async function signingKey() {
  const secret = process.env.SITE_SESSION_SECRET;
  if (!secret) {
    throw new Error("SITE_SESSION_SECRET is not configured");
  }

  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

export async function createSiteSession() {
  const payload = toBase64Url(
    encoder.encode(JSON.stringify({ exp: Date.now() + 1000 * 60 * 60 * 24 * 14 } satisfies SessionPayload)),
  );
  const signature = await crypto.subtle.sign("HMAC", await signingKey(), encoder.encode(payload));
  return `${payload}.${toBase64Url(new Uint8Array(signature))}`;
}

export async function isValidSiteSession(token: string | undefined) {
  if (!token) return false;

  const [payload, signature, ...rest] = token.split(".");
  if (!payload || !signature || rest.length > 0) return false;

  try {
    const validSignature = await crypto.subtle.verify(
      "HMAC",
      await signingKey(),
      fromBase64Url(signature),
      encoder.encode(payload),
    );
    if (!validSignature) return false;

    const session = JSON.parse(new TextDecoder().decode(fromBase64Url(payload))) as SessionPayload;
    return Number.isFinite(session.exp) && session.exp > Date.now();
  } catch {
    return false;
  }
}
