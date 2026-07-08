import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

// NOTE: placeholders honestos. Substitui name/quote/initial pelas fotos e prints reais
// dos teus clientes / amigos quando estiverem prontos.
const testimonials = [
  {
    initial: "N",
    name: "Nelson",
    area: "Luanda",
    quote: "Recebi rápido e funciona mesmo. Camisola velha parece nova.",
  },
  {
    initial: "M",
    name: "Mariana",
    area: "Talatona",
    quote: "Usei no sofá e nas mantas, tirou tudo. Vale cada kwanza.",
  },
  {
    initial: "E",
    name: "Edmilson",
    area: "Viana",
    quote: "Entrega no mesmo dia em Luanda. Recomendo a 100%.",
  },
];

export const SocialWall = () => (
  <section className="py-16 md:py-24 bg-muted/40">
    <div className="container-tight">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="text-primary font-bold uppercase tracking-wider text-sm">Quem já usou</span>
        <h2 className="mt-3 font-display font-extrabold text-3xl md:text-5xl leading-tight text-balance">
          Angolanos que aprovaram
        </h2>
      </Reveal>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 100}>
            <article className="h-full bg-card rounded-2xl p-6 shadow-card flex flex-col gap-4 border border-border">
              <Quote className="h-6 w-6 text-primary/60" />
              <p className="text-foreground text-base leading-relaxed flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="h-11 w-11 rounded-full bg-primary/10 text-primary grid place-items-center font-display font-bold">
                  {t.initial}
                </div>
                <div>
                  <p className="font-display font-bold text-foreground leading-tight">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.area}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
