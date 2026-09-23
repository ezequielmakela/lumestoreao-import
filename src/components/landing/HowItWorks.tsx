import { CirclePower, MoveDown, Shirt } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    icon: CirclePower,
    number: "01",
    title: "Liga o aparelho",
    description: "A bateria recarregável deixa o Removedor Lume pronto para usar onde precisares.",
  },
  {
    icon: MoveDown,
    number: "02",
    title: "Passa sobre o tecido",
    description: "Desliza suavemente sobre os fiapos e as bolinhas, sem pressionar a peça.",
  },
  {
    icon: Shirt,
    number: "03",
    title: "Recupera o aspeto limpo",
    description: "Os resíduos ficam no recipiente removível e a roupa volta a parecer cuidada.",
  },
];

export const HowItWorks = () => (
  <section id="como-funciona" className="border-y border-border bg-background py-14 md:py-20">
    <div className="container-tight">
      <Reveal className="max-w-2xl">
        <p className="section-label">Simples de usar</p>
        <h2 className="section-title mt-3">Uma boa peça não precisa de ser substituída.</h2>
        <p className="section-copy mt-4">
          Em três passos, removes os fiapos que fazem a roupa parecer gasta e recuperas um aspeto mais limpo.
        </p>
      </Reveal>

      <ol className="mt-9 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
        {steps.map(({ icon: Icon, number, title, description }) => (
          <li key={number} className="bg-background p-6 md:p-8">
            <div className="flex items-center justify-between">
              <Icon className="h-5 w-5 text-primary" />
              <span className="font-display text-xs font-bold text-muted-foreground">{number}</span>
            </div>
            <h3 className="mt-8 font-display text-lg font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);