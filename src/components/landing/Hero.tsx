import { Button } from "@/components/ui/button";
import { Users, Truck, ShieldCheck, Clock } from "lucide-react";
import { Typewriter } from "./Typewriter";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

export const Hero = ({ onBuyClick }: { onBuyClick?: () => void }) => {
  return (
    <section className="relative pt-24 md:pt-28 pb-12 md:pb-16 bg-gradient-to-b from-muted/40 to-background">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: copy + price + CTA */}
          <div className="text-center lg:text-left">
            <span className="fade-up inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide uppercase invisible">
              &nbsp;
            </span>

            <h1 className="fade-up mt-5 font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance min-h-[2.1em]" style={{ animationDelay: "0.1s" }}>
              <Typewriter
                segments={[
                  { text: "Nunca mais deite roupas por causa dos fiapos." },
                ]}
              />
            </h1>

            <p className="fade-up mt-4 text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0" style={{ animationDelay: "0.2s" }}>
              Remove fiapos e bolinhas das tuas roupas sem esforço. Pagamento na entrega.
            </p>

            {/* Preço acima da dobra */}
            <div className="fade-up mt-6 flex items-baseline justify-center lg:justify-start gap-3" style={{ animationDelay: "0.25s" }}>
              <span className="text-lg line-through text-[#b80000]">15.000 Kz</span>
              <span className="font-display font-extrabold text-4xl md:text-5xl text-primary leading-none">10.999</span>
              <span className="font-display font-bold text-xl text-primary">Kz</span>
            </div>
            <p className="fade-up mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-destructive" style={{ animationDelay: "0.3s" }}>
              <Clock className="h-4 w-4" /> &nbsp;Últimas unidades
            </p>

            <div className="fade-up mt-6 flex flex-col sm:flex-row gap-3 sm:items-center justify-center lg:justify-start" style={{ animationDelay: "0.35s" }}>
              <Button
                onClick={onBuyClick}
                size="lg"
                className="pulse-glow bg-primary hover:bg-[hsl(var(--primary-glow))] text-primary-foreground font-display font-bold text-base md:text-lg h-14 px-10 shadow-elegant sm:min-w-[240px]"
              >
                Pague apenas na entrega.
              </Button>
            </div>

            {/* Mini trust row */}
            <ul className="fade-up mt-8 flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start text-xs md:text-sm text-muted-foreground" style={{ animationDelay: "0.4s" }}>
              <li className="inline-flex items-center gap-1.5"><Users className="h-4 w-4 text-primary" /> +30 clientes</li>
              <li className="inline-flex items-center gap-1.5"><Truck className="h-4 w-4 text-primary" /> Entrega grátis</li>
              <li className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" /> Garantia 7 dias</li>
            </ul>
          </div>

          {/* Right: before/after slider */}
          <div className="fade-up" style={{ animationDelay: "0.2s" }}>
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
