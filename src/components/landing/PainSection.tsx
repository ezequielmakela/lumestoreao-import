import { ArrowDown, Sparkles } from "lucide-react";
import beforeAsset from "@/assets/antes.jpg.asset.json";
import afterAsset from "@/assets/depois.jpg.asset.json";
import { Reveal } from "./Reveal";

const beforeImg = beforeAsset.url;
const afterImg = afterAsset.url;

export const PainSection = () => (
  <section id="como-funciona" className="py-16 md:py-24 bg-background">
    <div className="container-tight">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="text-destructive font-bold uppercase tracking-wider text-sm">O Problema</span>
        <h2 className="mt-3 font-display font-extrabold text-3xl md:text-5xl leading-tight text-balance">
          Tuas roupas estão assim?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Fiapos e bolinhas fazem tuas peças favoritas parecerem velhas, mesmo quando ainda estão em ótimo estado.
        </p>
      </Reveal>

      <Reveal delay={120} className="mt-10 rounded-3xl overflow-hidden shadow-elegant relative">
        <img src={beforeImg} alt="Roupa com fiapos e bolinhas" loading="lazy" className="w-full aspect-[16/10] object-cover" />
        <span className="absolute top-4 left-4 bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          Antes
        </span>
      </Reveal>

      <div className="flex justify-center my-10">
        <div className="h-12 w-12 rounded-full bg-primary/10 grid place-items-center animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>

      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm">
          <Sparkles className="h-4 w-4" /> A Solução
        </span>
        <h2 className="mt-3 font-display font-extrabold text-3xl md:text-5xl leading-tight text-balance">
          Resolve em segundos!
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          O Removedor Lume devolve o aspecto de novo às tuas roupas — sem danificar o tecido.
        </p>
      </Reveal>

      <Reveal delay={120} className="mt-10 rounded-3xl overflow-hidden shadow-elegant relative">
        <img src={afterImg} alt="Roupa como nova depois" loading="lazy" className="w-full aspect-[16/10] object-cover" />
        <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          Depois
        </span>
      </Reveal>
    </div>
  </section>
);
