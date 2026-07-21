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
      className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant select-none touch-none bg-black"
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
      <span className="absolute top-3 left-3 bg-black/70 text-white text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
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
        <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
          Depois
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 w-[3px] bg-white shadow-elegant pointer-events-none"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white shadow-elegant grid place-items-center">
          <div className="flex items-center text-primary">
            <ChevronLeft className="h-4 w-4 -mr-1" />
            <ChevronRight className="h-4 w-4 -ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};
