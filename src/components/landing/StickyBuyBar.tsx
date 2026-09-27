import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export const StickyBuyBar = ({ onBuyClick }: { onBuyClick?: () => void }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md md:hidden safe-bottom animate-slide-in-right">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-muted-foreground">Removedor de Fiapos</p>
          <p className="font-display text-lg font-extrabold leading-tight text-foreground">9.000 Kz</p>
        </div>
        <Button onClick={onBuyClick} size="lg" className="h-12 shrink-0 rounded-sm bg-primary px-6 font-display text-sm font-bold uppercase hover:bg-primary/90">
          Pedir agora
        </Button>
      </div>
    </div>
  );
};
