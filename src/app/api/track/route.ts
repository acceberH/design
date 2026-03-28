import { Redis } from "@upstash/redis";

const kv = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { sessionId, page, referrer } = await req.json();
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";

    // Cache IP geo lookup for 24h to avoid repeat calls
    let geo: Record<string, string> | null = await kv.get(`geo:${ip}`);
    if (!geo) {
      try {
        const res = await fetch(`https://ipinfo.io/${ip}/json`);
        geo = await res.json();
        await kv.set(`geo:${ip}`, geo, { ex: 86400 });
      } catch {
        geo = {};
      }
    }

    const record = {
      sessionId,
      page,
      referrer: referrer || "",
      org: (geo as Record<string, string>)?.org || "Unknown",
      city: (geo as Record<string, string>)?.city || "",
      country: (geo as Record<string, string>)?.country || "",
      timestamp: Date.now(),
    };

    await kv.lpush("pageviews", JSON.stringify(record));
    await kv.ltrim("pageviews", 0, 1999); // keep last 2000 events

    return NextResponse.json({ ok: true });
  } catch {
    // Silently fail — never break the site
    return NextResponse.json({ ok: false });
  }
}
