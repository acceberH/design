"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function getSessionId(): string {
  const key = "rbx_sid";
  let sid = sessionStorage.getItem(key);
  if (!sid) {
    sid = Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem(key, sid);
  }
  return sid;
}

export default function Tracker() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      const sessionId = getSessionId();
      const referrer = document.referrer || "";
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, page: pathname, referrer }),
      }).catch(() => {});
    } catch {
      // ignore
    }
  }, [pathname]);

  return null;
}
