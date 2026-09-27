import { Button } from "@/components/ui/button";
import { ArrowRight, Check, MessageCircle, MapPin, Wallet } from "lucide-react";
import productImg from "@/assets/product.webp";
import { Reveal } from "./Reveal";
import { buildSimpleUrl } from "@/lib/whatsapp";

export const ProductSection = ({ onBuyClick }: { onBuyClick?: () => void }) => {
  return (
    <section id="produto" className="story-section bg-background">
      <div className="container-tight grid gap-12 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-6">
          <div className="product-stage aspect-[4/5]">
            <img src={productImg} alt="Removedor de Fiapos Lume" width={720} height={1280} loading="lazy" decoding="async" />
            <span className="product-stage-label">Lume / 01</span>
          </div>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
          <p className="section-label">O produto</p>
          <h2 className="section-title mt-4">Removedor de Fiapos Lume</h2>
          <p className="section-copy mt-5">
            Um pequeno produto que pode devolver um novo aspeto às tuas peças favoritas.
          </p>
          <div className="mt-8 border-y border-border py-7">
            <span className="block text-xs font-bold uppercase text-muted-foreground">Preço</span>
            <span className="mt-2 block font-display text-5xl font-extrabold leading-none text-foreground sm:text-6xl">9.000 Kz</span>
          </div>
          <ul className="mt-7 space-y-4">
            {["Entrega em Luanda", "Pagamento na entrega", "Compra simples", "Suporte via WhatsApp"].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-3">
            <Button
              onClick={onBuyClick}
              size="lg"
              className="cta-primary w-full"
            >
              Quero o meu <ArrowRight />
            </Button>
            <Button asChild variant="outline" size="lg" className="cta-secondary w-full">
              <a href={buildSimpleUrl("Olá, vi o Removedor de Fiapos Lume e gostaria de saber mais.")} target="_blank" rel="noopener noreferrer">
                Tenho uma dúvida <MessageCircle />
              </a>
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 text-xs font-semibold uppercase text-muted-foreground">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Luanda</span>
            <span className="flex items-center gap-2"><Wallet className="h-4 w-4 text-primary" /> Paga ao receber</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
