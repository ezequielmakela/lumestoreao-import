import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, MapPin, Wallet } from "lucide-react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { TypewriterLine } from "./TypewriterLine";
import productImg from "@/assets/product.webp";

export const Hero = ({ onBuyClick }: { onBuyClick?: () => void }) => {
  return (
    <section className="hero-shell relative overflow-hidden bg-background pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="container-tight">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="relative z-10 lg:col-span-6 lg:pr-8">
            <p className="section-label">Removedor de Fiapos Lume · Angola</p>
            <h1 className="hero-title mt-5 max-w-3xl">
              A tua roupa não está velha.
            </h1>
            <p className="mt-4 max-w-2xl font-display text-2xl font-semibold leading-tight text-muted-foreground sm:text-3xl">
              Ela só precisa de voltar a parecer nova.
            </p>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
              Remove fiapos, pelos e resíduos das tuas roupas em poucos segundos e devolve às tuas peças um aspeto mais limpo e cuidado.
            </p>
            <TypewriterLine />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Button onClick={onBuyClick} size="lg" className="cta-primary w-full">
                Quero o meu — 9.000 Kz <ArrowRight />
              </Button>
              <Button asChild variant="outline" size="lg" className="cta-secondary w-full">
                <a href="#antes-depois">Ver como funciona <ArrowDown /></a>
              </Button>
            </div>
            <ul className="mt-7 grid gap-3 border-t border-border pt-6 text-sm font-semibold sm:grid-cols-2">
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> Entrega em Luanda
              </li>
              <li className="inline-flex items-center gap-2">
                <Wallet className="h-4 w-4 text-primary" /> Paga apenas na entrega
              </li>
            </ul>
          </div>
          <div className="relative lg:col-span-6">
            <BeforeAfterSlider className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]" />
            <div className="product-float">
              <img src={productImg} alt="Removedor de Fiapos Lume" width={720} height={1280} decoding="async" />
              <span>Removedor Lume</span>
            </div>
            <p className="mt-4 text-center text-xs font-semibold uppercase text-muted-foreground">Arrasta para revelar</p>
          </div>
        </div>
      </div>
    </section>
  );
};
