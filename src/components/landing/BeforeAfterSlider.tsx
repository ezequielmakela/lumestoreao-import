import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const beforeImg = "/images/antes.jpg";
const afterImg = "/images/depois.jpg";

export const BeforeAfterSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full select-none touch-none overflow-hidden rounded-lg border border-border bg-foreground"
      onMouseDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
      onMouseMove={(e) => {
        if (dragging.current) setFromClientX(e.clientX);
      }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => {
        dragging.current = true;
        setFromClientX(e.touches[0].clientX);
      }}
      onTouchMove={(e) => {
        if (dragging.current) setFromClientX(e.touches[0].clientX);
      }}
      onTouchEnd={() => (dragging.current = false)}
    >
      {/* Before (full) */}
      <img
        src={beforeImg}
        alt="Roupa com fiapos antes"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
      />
      <span className="absolute left-3 top-3 rounded-sm bg-foreground/80 px-2.5 py-1 text-[10px] font-bold uppercase text-background md:text-xs">
        Antes
      </span>

      {/* After (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
      >
        <img
          src={afterImg}
          alt="Roupa como nova depois"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover"
          draggable={false}
        />
        <span className="absolute right-3 top-3 rounded-sm bg-primary px-2.5 py-1 text-[10px] font-bold uppercase text-primary-foreground md:text-xs">
          Depois
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute bottom-0 top-0 w-[3px] bg-background pointer-events-none"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-background shadow-soft">
          <div className="flex items-center text-primary">
            <ChevronLeft className="h-4 w-4 -mr-1" />
            <ChevronRight className="h-4 w-4 -ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};
