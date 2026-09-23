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
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden safe-bottom">
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <p className="text-xs leading-none text-muted-foreground line-through">15.000 Kz</p>
          <p className="font-display text-lg font-extrabold leading-tight text-foreground">9.000 Kz</p>
          <p className="text-[10px] text-muted-foreground leading-tight">Pagamento na entrega</p>
        </div>
        <Button onClick={onBuyClick} size="lg" className="h-12 flex-1 rounded-md bg-primary font-display font-bold hover:bg-primary/90">
          Comprar agora
        </Button>
      </div>
    </div>
  );
};
