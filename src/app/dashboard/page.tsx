"use client";

import { useState } from "react";

type PageView = {
  sessionId: string;
  page: string;
  referrer: string;
  org: string;
  city: string;
  country: string;
  timestamp: number;
};

type Session = {
  sessionId: string;
  org: string;
  city: string;
  country: string;
  pages: { page: string; referrer: string; timestamp: number }[];
};

function groupBySessions(views: PageView[]): Session[] {
  const map = new Map<string, Session>();
  // Sort oldest first so pages are in order
  const sorted = [...views].sort((a, b) => a.timestamp - b.timestamp);
  for (const v of sorted) {
    if (!map.has(v.sessionId)) {
      map.set(v.sessionId, {
        sessionId: v.sessionId,
        org: v.org,
        city: v.city,
        country: v.country,
        pages: [],
      });
    }
    map.get(v.sessionId)!.pages.push({
      page: v.page,
      referrer: v.referrer,
      timestamp: v.timestamp,
    });
  }
  // Sort sessions newest first
  return [...map.values()].sort(
    (a, b) => b.pages[b.pages.length - 1].timestamp - a.pages[a.pages.length - 1].timestamp
  );
}

function formatTime(ts: number) {
  const d = new Date(ts);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" }) +
    " · " +
    d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

function cleanOrg(org: string) {
  // ipinfo returns "AS16509 Amazon.com, Inc." — strip the ASN prefix
  return org.replace(/^AS\d+\s+/, "");
}

function cleanReferrer(ref: string) {
  if (!ref) return "Direct";
  try {
    const u = new URL(ref);
    if (u.hostname.includes("linkedin")) return "LinkedIn";
    if (u.hostname.includes("google")) return "Google";
    if (u.hostname.includes("github")) return "GitHub";
    return u.hostname.replace("www.", "");
  } catch {
    return ref;
  }
}

export default function Dashboard() {
  const [pw, setPw] = useState("");
  const [authed, setAuthed] = useState(false);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function load(password: string) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/visits?pw=${encodeURIComponent(password)}`);
      if (res.status === 401) {
        setError("Wrong password");
        setLoading(false);
        return;
      }
      const data: PageView[] = await res.json();
      setSessions(groupBySessions(data));
      setAuthed(true);
    } catch {
      setError("Failed to load");
    }
    setLoading(false);
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-80">
          <h1 className="text-[18px] font-semibold text-gray-900 mb-1">Visitor Insights</h1>
          <p className="text-[13px] text-gray-400 mb-6">Enter your dashboard password</p>
          <input
            type="password"
            value={pw}
            onChange={e => setPw(e.target.value)}
            onKeyDown={e => e.key === "Enter" && load(pw)}
            placeholder="Password"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] outline-none focus:border-gray-400 mb-3"
            autoFocus
          />
          {error && <p className="text-[12px] text-red-400 mb-3">{error}</p>}
          <button
            onClick={() => load(pw)}
            disabled={loading}
            className="w-full bg-gray-900 text-white rounded-xl py-2.5 text-[14px] font-medium hover:bg-gray-700 transition-colors disabled:opacity-40"
          >
            {loading ? "Loading…" : "View Insights"}
          </button>
        </div>
      </div>
    );
  }

  const today = new Date().toDateString();
  const todaySessions = sessions.filter(s =>
    new Date(s.pages[s.pages.length - 1].timestamp).toDateString() === today
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-[22px] font-semibold text-gray-900">Visitor Insights</h1>
          <p className="text-[13px] text-gray-400 mt-1">
            {todaySessions.length} visitor{todaySessions.length !== 1 ? "s" : ""} today · {sessions.length} total sessions
          </p>
        </div>

        <div className="space-y-3">
          {sessions.length === 0 && (
            <p className="text-[14px] text-gray-400 text-center py-16">No visitors yet</p>
          )}
          {sessions.map(s => {
            const firstRef = s.pages[0]?.referrer;
            const lastSeen = s.pages[s.pages.length - 1].timestamp;
            const isToday = new Date(lastSeen).toDateString() === today;
            return (
              <div key={s.sessionId} className="bg-white rounded-2xl border border-gray-100 px-5 py-4">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="text-[15px] font-medium text-gray-900">
                      {cleanOrg(s.org) || "Unknown"}
                    </p>
                    <p className="text-[12px] text-gray-400 mt-0.5">
                      {[s.city, s.country].filter(Boolean).join(", ") || "Location unknown"}
                      {firstRef ? ` · from ${cleanReferrer(firstRef)}` : " · Direct"}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${isToday ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-400"}`}>
                      {isToday ? "Today" : formatTime(lastSeen)}
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  {s.pages.map((p, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-200 flex-shrink-0" />
                      <span className="text-[13px] text-gray-600 font-mono">{p.page}</span>
                      <span className="text-[11px] text-gray-300 ml-auto">
                        {new Date(p.timestamp).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
