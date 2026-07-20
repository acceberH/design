import { NextRequest, NextResponse } from "next/server";
import { isValidSiteSession } from "./lib/siteAccess";

const ACCESS_PATH = "/access";
const ACCESS_API_PATH = "/api/site-access";

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  if (pathname === ACCESS_PATH || pathname === ACCESS_API_PATH) return NextResponse.next();

  if (await isValidSiteSession(request.cookies.get("site_access")?.value)) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const loginUrl = request.nextUrl.clone();
  loginUrl.pathname = ACCESS_PATH;
  loginUrl.search = "";
  loginUrl.searchParams.set("next", `${pathname}${search}`);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
