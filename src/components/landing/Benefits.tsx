import { PiggyBank, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

const benefits = [
  { icon: PiggyBank, title: "Economiza dinheiro", desc: "Renove peças antigas em vez de comprar novas." },
  { icon: Sparkles, title: "Fácil de usar", desc: "Ligue, deslize e pronto. Sem complicação." },
  { icon: ShieldCheck, title: "Seguro para tecidos", desc: "Lâmina protegida, não danifica os tecidos" },
  { icon: Zap, title: "Resultado imediato", desc: "Sua roupa fica como nova em segundos!" },
];

export const Benefits = () => (
  <section className="py-20 md:py-28 bg-muted/40">
    <div className="container-tight">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="text-primary font-bold uppercase tracking-wider text-base">Por que escolher Lume</span>
        <h2 className="mt-3 font-display font-extrabold text-3xl md:text-5xl leading-tight text-balance">
          Tudo o que você precisa em um só dispositivo
        </h2>
      </Reveal>
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {benefits.map(({ icon: Icon, title, desc }, i) => (
          <Reveal key={title} delay={i * 100}>
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card-elegant border border-border/60 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 h-full">
              <div className="h-12 w-12 rounded-xl bg-primary/10 grid place-items-center text-primary border-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display font-bold text-lg md:text-xl">{title}</h3>
              <p className="mt-2 text-sm md:text-base text-muted-foreground">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
