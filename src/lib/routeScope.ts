export function isHrPath(pathname: string | null | undefined) {
  return Boolean(pathname && (pathname === "/hr" || pathname.startsWith("/hr/")));
}

export function scopedHref(pathname: string | null | undefined, href: string) {
  if (!isHrPath(pathname)) return href;
  if (href.startsWith("/hr")) return href;
  if (href === "/") return "/hr";
  if (href.startsWith("/#")) return `/hr${href.slice(1)}`;
  if (href.startsWith("/")) return `/hr${href}`;
  return href;
}
