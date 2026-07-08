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
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border p-4 safe-bottom shadow-elegant">
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <p className="text-xs line-through leading-none text-[#b80000]">15.000 kz</p>
          <p className="font-display font-extrabold text-lg text-primary leading-tight">10.999 Kz</p>
          <p className="text-[10px] text-muted-foreground leading-tight">Pagamento na entrega</p>
        </div>
        <Button onClick={onBuyClick} size="lg" className="bg-primary hover:bg-[hsl(var(--primary-glow))] font-display font-bold flex-1">
          Comprar Agora
        </Button>
      </div>
    </div>
  );
};
