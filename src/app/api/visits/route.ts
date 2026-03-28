import { Redis } from "@upstash/redis";

const kv = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const pw = req.nextUrl.searchParams.get("pw");
  if (!process.env.DASHBOARD_PASSWORD || pw !== process.env.DASHBOARD_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const raw = await kv.lrange("pageviews", 0, 999);
  const visits = raw.map((v) =>
    typeof v === "string" ? JSON.parse(v) : v
  );

  return NextResponse.json(visits);
}
