import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";

const useCountdown = (hours = 24) => {
  const [end] = useState(() => Date.now() + hours * 3600 * 1000);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, end - now);
  const h = Math.floor(diff / 3.6e6);
  const m = Math.floor((diff % 3.6e6) / 6e4);
  const s = Math.floor((diff % 6e4) / 1000);
  return [h, m, s].map((n) => String(n).padStart(2, "0"));
};

const Box = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl w-16 md:w-20 h-16 md:h-20 grid place-items-center">
      <span className="font-display font-extrabold text-2xl md:text-3xl text-white tabular-nums">{value}</span>
    </div>
    <span className="mt-2 text-xs uppercase tracking-wider text-white/80">{label}</span>
  </div>
);

export const Offer = ({ onBuyClick }: { onBuyClick?: () => void }) => {
  return null;
};
