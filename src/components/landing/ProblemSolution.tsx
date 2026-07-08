import { Check, X } from "lucide-react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import { Reveal } from "./Reveal";

export const ProblemSolution = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-background">
      <div className="container-tight">
        {/* Problem */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal className="relative rounded-2xl overflow-hidden shadow-elegant order-2 md:order-1">
            <img src={beforeImg} alt="Roupa com fiapos e bolinhas" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover aspect-[4/3]" />
            <span className="absolute top-4 left-4 bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Antes</span>
          </Reveal>
          <Reveal delay={120} className="order-1 md:order-2">
            <span className="text-primary font-bold uppercase tracking-wider text-base">O Problema</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl md:text-5xl leading-tight text-balance">
              Roupas desgastadas afetam tua imagem
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Fiapos fazem tuas roupas parecerem antigas, em poucas lavagens, mesmo quando ainda estão em ótimo estado.
            </p>
            <ul className="mt-6 space-y-3">
              {["Visual descuidado em roupas novas", "Gasto constante em querer comprar roupas novas", "Insegurança ao se vestir bem"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 h-6 w-6 rounded-full bg-destructive/10 grid place-items-center shrink-0">
                    <X className="h-4 w-4 text-destructive" />
                  </span>
                  <span className="text-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Solution */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mt-24 md:mt-32">
          <Reveal>
            <span className="text-primary font-bold uppercase tracking-wider text-base">A Solução</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl md:text-5xl leading-tight text-balance">
              O Removedor Lume devolve a vida das suas roupas
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Em poucos segundos, sua peça volta a parecer recém-comprada. Seguro, prático e eficiente para qualquer tecido.
            </p>
            <ul className="mt-6 space-y-3">
              {["Remove fiapos e bolinhas em segundos!", "Funciona em malhas, casacos, sofás e cobertores", "Lâmina protegida, não danifica os tecidos"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 h-6 w-6 rounded-full bg-primary/10 grid place-items-center shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </span>
                  <span className="text-foreground font-medium">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img src={afterImg} alt="Roupa limpa após uso do removedor Lume" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover aspect-[4/3]" />
            <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Depois</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
