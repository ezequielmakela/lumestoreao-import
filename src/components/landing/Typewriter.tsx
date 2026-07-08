import { useEffect, useState } from "react";

interface Segment {
  text: string;
  className?: string;
}

export const Typewriter = ({ segments, speed = 60 }: { segments: Segment[]; speed?: number }) => {
  const full = segments.map((s) => s.text).join("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= full.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [count, full.length, speed]);

  let remaining = count;
  return (
    <>
      {segments.map((seg, i) => {
        const shown = seg.text.slice(0, Math.max(0, Math.min(seg.text.length, remaining)));
        remaining -= seg.text.length;
        return shown ? (
          <span key={i} className={seg.className}>
            {shown}
          </span>
        ) : null;
      })}
      <span
        className="inline-block w-[0.08em] ml-1 align-baseline animate-pulse"
        style={{ borderRight: "0.08em solid currentColor", height: "0.9em" }}
      />
    </>
  );
};
