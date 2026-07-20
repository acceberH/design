import { timingSafeEqual } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { createSiteSession } from "@/lib/siteAccess";

const SESSION_COOKIE = "site_access";

function passwordsMatch(value: string, expected: string) {
  const submitted = Buffer.from(value);
  const configured = Buffer.from(expected);
  return submitted.length === configured.length && timingSafeEqual(submitted, configured);
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const password = formData.get("password");
  const next = formData.get("next");
  const destination = typeof next === "string" && next.startsWith("/") && !next.startsWith("//") ? next : "/";
  const configuredPassword = process.env.SITE_PASSWORD;

  if (!configuredPassword || typeof password !== "string" || !passwordsMatch(password, configuredPassword)) {
    const loginUrl = new URL("/access", request.url);
    loginUrl.searchParams.set("error", "1");
    loginUrl.searchParams.set("next", destination);
    return NextResponse.redirect(loginUrl, 303);
  }

  const response = NextResponse.redirect(new URL(destination, request.url), 303);
  response.cookies.set({
    name: SESSION_COOKIE,
    value: await createSiteSession(),
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 14,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return response;
}
