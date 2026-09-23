import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, ShieldCheck, Wallet } from "lucide-react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

export const Hero = ({ onBuyClick }: { onBuyClick?: () => void }) => {
  return (
    <section className="relative border-b border-border bg-background pb-12 pt-20 md:pb-20 md:pt-28">
      <div className="container-tight">
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
          {/* Left: copy + price + CTA */}
          <div className="text-left">
            <p className="section-label">Removedor de Fiapos Lume</p>
            <h1 className="mt-3 max-w-xl font-display text-4xl font-extrabold leading-[1.06] text-balance sm:text-5xl md:text-6xl">
              Uma roupa boa pode parecer velha por causa dos fiapos.
            </h1>

            <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground md:text-lg">
              Recupera o aspeto limpo das tuas peças sem ter de as substituir.
            </p>

            {/* Preço */}
            <div className="mt-6 flex items-end gap-3">
              <span className="pb-1 text-sm text-muted-foreground line-through">15.000 Kz</span>
              <span className="font-display text-4xl font-extrabold leading-none text-foreground md:text-5xl">9.000 Kz</span>
            </div>

            {/* Oferta reforçada — linha limpa, sem halo */}
            <ul className="mt-5 grid gap-2 text-sm font-semibold text-foreground sm:grid-cols-2">
              <li className="inline-flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary" /> Entrega grátis hoje em Luanda
              </li>
              <li className="inline-flex items-center gap-2">
                <Wallet className="h-4 w-4 text-primary" /> Paga apenas na entrega
              </li>
            </ul>

            <div className="mt-7">
              <Button
                onClick={onBuyClick}
                size="lg"
                className="h-14 w-full rounded-md bg-primary px-8 font-display text-base font-bold text-primary-foreground shadow-none hover:bg-primary/90 sm:w-auto sm:min-w-[260px]"
              >
                Comprar agora <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Mini trust row alinhado */}
            <ul className="mt-6 grid max-w-md grid-cols-2 gap-3 border-t border-border pt-5 text-xs text-muted-foreground md:text-sm">
              <li className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                <span>Entrega grátis em Luanda</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span>Garantia 7 dias</span>
              </li>
            </ul>
          </div>

          {/* Right: before/after slider */}
          <div>
            <BeforeAfterSlider />
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Arrasta para ver a diferença
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
