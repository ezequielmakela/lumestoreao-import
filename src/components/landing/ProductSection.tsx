import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Truck, RotateCcw, Lock, Wallet } from "lucide-react";
import productImg from "@/assets/product.webp";
const afterImg = "/images/depois.webp";
import heroImg from "@/assets/hero.webp";
import { Reveal } from "./Reveal";

const images = [productImg, afterImg, heroImg];

export const ProductSection = ({ onBuyClick }: { onBuyClick?: () => void }) => {
  const [active, setActive] = useState(0);



  return (
    <section id="produto" className="bg-background py-14 md:py-20">
      <div className="container-tight grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
        {/* Gallery */}
        <Reveal>
          <div className="aspect-square overflow-hidden rounded-lg border border-border bg-card">
            <img src={images[active]} alt="Removedor Lume" width={1024} height={1024} className="w-full h-full object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`aspect-square min-h-11 overflow-hidden rounded-md border-2 transition-opacity ${active === i ? "border-primary" : "border-border opacity-70 hover:opacity-100"}`}
              >
                <img src={src} alt={`Vista ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </Reveal>

        {/* Info */}
        <Reveal delay={120}>
          <p className="section-label">O produto</p>
          <h2 className="section-title mt-3">
            Removedor de Fiapos Lume
          </h2>
          <p className="section-copy mt-4">
            O dispositivo elétrico que devolve o aspecto de novo às suas roupas. Compacto, recarregável e seguro para todos os tecidos.
          </p>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-4xl font-extrabold leading-none text-foreground md:text-5xl">9.000 Kz</span>
            <span className="text-sm text-muted-foreground line-through">15.000 Kz</span>
          </div>

          <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-foreground/80">
            <li className="inline-flex items-center gap-2">
              <Truck className="h-4 w-4 text-primary" /> Entrega grátis hoje em Luanda
            </li>
            <li className="inline-flex items-center gap-2">
              <Wallet className="h-4 w-4 text-primary" /> Recebe em casa e paga na entrega
            </li>
          </ul>

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
              className="h-14 w-full rounded-md bg-primary font-display text-base font-bold text-primary-foreground shadow-none hover:bg-primary/90 md:text-lg"
            >
              Comprar agora
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
