"use client";

import { useEffect, useState } from "react";

const FORMATTER = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Dubai",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

/**
 * Dubai wall-clock, rendered only after mount so the server HTML and the
 * first client render agree (the server has no idea what second it is by
 * the time the page paints).
 */
export function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(FORMATTER.format(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="inline-flex items-center gap-2">
      <span
        aria-hidden
        className="pulse-dot size-1.5 rounded-full bg-accent"
      />
      <span className="tabular-nums">
        {time ?? "--:--:--"}
        <span className="text-muted-foreground/70"> GST</span>
      </span>
    </span>
  );
}
