import { ArrowDown, CirclePower, MoveDown, Shirt, Sparkles } from "lucide-react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { Reveal } from "./Reveal";

const benefits = [
  {
    number: "01",
    title: "Roupas com melhor aparência",
    copy: "Remove os fiapos que deixam as peças com um aspeto desgastado.",
  },
  {
    number: "02",
    title: "Resultado em poucos instantes",
    copy: "Um cuidado simples, sem processos complicados.",
  },
  {
    number: "03",
    title: "Reutiliza as tuas peças",
    copy: "Recupera a aparência das roupas que ainda estão boas.",
  },
  {
    number: "04",
    title: "Fácil de usar",
    copy: "Prático para integrar no cuidado diário da roupa.",
  },
];

export const ProblemSection = () => (
  <section id="problema" className="story-section bg-background">
    <div className="container-tight grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
      <Reveal className="lg:col-span-5 lg:pr-10">
        <p className="section-label">O problema não é a peça</p>
        <h2 className="section-title mt-4">Quantas roupas tu já achaste que estavam velhas?</h2>
        <p className="section-copy mt-6">
          Muitas vezes a roupa não está estragada. O excesso de fiapos é que faz com que ela pareça velha,
          descuidada e sem vida.
        </p>
        <div className="mt-8 flex items-center gap-3 text-sm font-bold uppercase text-foreground">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-border">
            <ArrowDown className="h-4 w-4" />
          </span>
          Olha mais de perto
        </div>
      </Reveal>
      <Reveal className="lg:col-span-7" delay={100}>
        <figure className="editorial-media aspect-[4/5] sm:aspect-[5/4]">
          <img
            src="/images/antes.webp"
            alt="Detalhe de uma roupa preta com fiapos"
            width={1080}
            height={1440}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="media-caption">Tecido com fiapos · antes</figcaption>
        </figure>
      </Reveal>
    </div>
  </section>
);

export const DiscoverySection = () => (
  <section id="descoberta" className="story-section bg-foreground text-background">
    <div className="container-tight">
      <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-3">
          <p className="text-xs font-bold uppercase text-primary">Antes → Descoberta → Depois</p>
        </div>
        <div className="lg:col-span-8 lg:col-start-5">
          <h2 className="font-display text-3xl font-extrabold leading-[1.04] sm:text-5xl lg:text-6xl">
            Foi por isso que encontrámos uma forma simples de recuperar o aspeto das tuas peças.
          </h2>
        </div>
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <figure className="editorial-media aspect-[4/5] bg-card">
            <img src="/images/antes.webp" alt="Roupa com fiapos" width={1080} height={1440} loading="lazy" decoding="async" />
            <figcaption className="media-caption">Antes</figcaption>
          </figure>
        </Reveal>
        <Reveal className="lg:col-span-5 lg:col-start-8 lg:mt-28" delay={120}>
          <figure className="editorial-media aspect-[4/5] bg-card">
            <img src="/images/depois.webp" alt="Roupa limpa depois de remover os fiapos" width={1080} height={1440} loading="lazy" decoding="async" />
            <figcaption className="media-caption media-caption-accent">Depois</figcaption>
          </figure>
        </Reveal>
      </div>
    </div>
  </section>
);

export const TransformationSection = () => (
  <section id="antes-depois" className="story-section bg-muted/40">
    <div className="container-tight">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="section-label">Demonstração real</p>
        <h2 className="section-title mt-4">Não parece a mesma roupa.</h2>
        <p className="section-copy mx-auto mt-5 max-w-xl">Menos fiapos. Mais cuidado. Melhor aparência.</p>
      </Reveal>
      <Reveal className="mx-auto mt-10 max-w-5xl lg:mt-14" delay={100}>
        <BeforeAfterSlider className="aspect-[3/4] sm:aspect-[16/10]" />
        <p className="mt-4 text-center text-xs font-semibold uppercase text-muted-foreground">
          Arrasta a barra para comparar
        </p>
      </Reveal>
    </div>
  </section>
);

export const BenefitsSection = () => (
  <section className="story-section bg-background">
    <div className="container-tight">
      <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="section-label">Valor no dia a dia</p>
          <h2 className="section-title mt-4">Um pequeno cuidado muda a forma como a roupa se apresenta.</h2>
        </div>
        <p className="section-copy lg:col-span-4 lg:col-start-9">
          Feito para resolver um problema real, com poucos passos e sem complicação.
        </p>
      </Reveal>
      <div className="mt-12 grid border-t border-border sm:grid-cols-2 lg:mt-16">
        {benefits.map((item, index) => (
          <Reveal
            key={item.number}
            delay={index * 70}
            className="benefit-panel border-b border-border sm:odd:border-r"
          >
            <div className="flex items-start justify-between gap-6">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-display text-xs font-bold text-muted-foreground">{item.number}</span>
            </div>
            <h3 className="mt-12 max-w-sm font-display text-2xl font-bold leading-tight">{item.title}</h3>
            <p className="mt-4 max-w-md leading-7 text-muted-foreground">{item.copy}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const steps = [
  { icon: CirclePower, number: "01", title: "Liga" },
  { icon: MoveDown, number: "02", title: "Passa" },
  { icon: Shirt, number: "03", title: "Vê a diferença" },
];

export const EditorialSteps = () => (
  <section id="como-funciona" className="story-section bg-foreground text-background">
    <div className="container-tight">
      <Reveal className="max-w-3xl">
        <p className="text-xs font-bold uppercase text-primary">Como funciona</p>
        <h2 className="mt-4 font-display text-4xl font-extrabold leading-none sm:text-6xl">Três gestos. Uma diferença visível.</h2>
      </Reveal>
      <ol className="mt-14 grid border-t border-background/20 md:grid-cols-3">
        {steps.map(({ icon: Icon, number, title }, index) => (
          <Reveal key={number} delay={index * 100} as="li" className="step-panel border-b border-background/20 md:border-r">
            <div className="flex items-center justify-between">
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-xs font-bold text-background/50">{number}</span>
            </div>
            <h3 className="mt-16 font-display text-3xl font-bold">{title}</h3>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);