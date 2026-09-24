import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import productImg from "@/assets/product.webp";

export const FinalCTA = ({ onBuyClick }: { onBuyClick?: () => void }) => (
  <section className="relative overflow-hidden bg-foreground text-background">
    <div className="container-tight grid min-h-[82vh] items-center gap-10 py-20 lg:grid-cols-12 lg:py-28">
      <Reveal className="relative z-10 lg:col-span-7">
        <p className="text-xs font-bold uppercase text-primary">Uma segunda vida para as tuas peças</p>
        <h2 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[0.98] sm:text-6xl lg:text-7xl">
          Talvez a tua roupa não precise de ser substituída.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-8 text-background/65">Talvez só precise de voltar a parecer nova.</p>
        <Button onClick={onBuyClick} size="lg" className="cta-primary mt-9 w-full sm:w-auto">
          Quero o meu — 9.000 Kz <ArrowRight />
        </Button>
      </Reveal>
      <Reveal className="relative lg:col-span-5" delay={120}>
        <div className="final-product-frame">
          <img src={productImg} alt="Removedor de Fiapos Lume" width={720} height={1280} loading="lazy" decoding="async" />
        </div>
      </Reveal>
    </div>
  </section>
);