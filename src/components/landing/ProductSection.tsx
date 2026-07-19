import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Truck, RotateCcw, Lock, Wallet } from "lucide-react";
import productImg from "@/assets/product.jpg";
import afterAsset from "@/assets/depois.jpg.asset.json";
const afterImg = afterAsset.url;
import heroImg from "@/assets/hero.jpg";
import { Reveal } from "./Reveal";

const images = [productImg, afterImg, heroImg];

export const ProductSection = ({ onBuyClick }: { onBuyClick?: () => void }) => {
  const [active, setActive] = useState(0);



  return (
    <section id="produto" className="py-16 md:py-24 bg-muted/40">
      <div className="container-tight grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
        {/* Gallery */}
        <Reveal>
          <div className="rounded-3xl overflow-hidden bg-card shadow-elegant aspect-square">
            <img src={images[active]} alt="Removedor Lume" width={1024} height={1024} className="w-full h-full object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-2xl overflow-hidden aspect-square border-2 transition-all ${active === i ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"}`}
              >
                <img src={src} alt={`Vista ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </Reveal>

        {/* Info */}
        <Reveal delay={120}>
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <AArrowDown key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">​</span>
          </div>
          <h2 className="mt-4 font-display font-extrabold text-3xl md:text-5xl leading-tight">
            Removedor de Fiapos Lume
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            O dispositivo elétrico que devolve o aspecto de novo às suas roupas. Compacto, recarregável e seguro para todos os tecidos.
          </p>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display font-extrabold text-4xl md:text-5xl text-primary leading-none">10.999</span>
            <span className="font-display font-bold text-xl text-primary leading-none">kz</span>
            <span className="text-lg line-through text-[#b80000] leading-none">15.000 kz</span>
          </div>
          <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-destructive">
            Restam poucas unidades
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Pagamento na entrega · Entrega grátis em Luanda</p>

          <ul className="mt-6 space-y-3">
            {["Bateria recarregável de longa duração", "Ideal para qualquer tecido", "Recipiente removível para fácil limpeza"].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button
              onClick={onBuyClick}
              size="lg"
              className="w-full bg-primary hover:bg-[hsl(var(--primary-glow))] text-primary-foreground font-display font-bold h-14 text-base md:text-lg shadow-elegant"
            >
              Comprar Agora
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border">
            {[
              { icon: Lock, label: "Pagamento Seguro" },
              { icon: Truck, label: "Entrega Grátis" },
              { icon: ShieldCheck, label: "Garantia 7 dias" },
              { icon: RotateCcw, label: "Troca Fácil" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2">
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-xs font-medium text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
