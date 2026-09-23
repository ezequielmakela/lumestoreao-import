import { Users, Truck, ShieldCheck } from "lucide-react";

const items = [
  { icon: Users, label: "+30 clientes satisfeitos" },
  { icon: Truck, label: "Entrega grátis em Luanda" },
  { icon: ShieldCheck, label: "Garantia 7 dias" },
];

export const SocialProof = () => (
  <section id="prova-social" className="border-y border-border bg-muted/40">
    <div className="container-tight py-8 md:py-10">
      <ul className="grid gap-5 sm:grid-cols-3 md:gap-8">
        {items.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-3">
            <Icon className="h-5 w-5 shrink-0 text-primary" />
            <span className="text-sm font-semibold text-foreground md:text-base">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
