import { Users, Truck, ShieldCheck, AArrowDown } from "lucide-react";

const items = [
  { icon: Users, label: "+30 clientes satisfeitos" },
  { icon: Truck, label: "Entrega em Grátis" },
  { icon: ShieldCheck, label: "Garantia 7 dias" },
  { icon: AArrowDown, label: "​" },
];

export const SocialProof = () => (
  <section id="prova-social" className="bg-foreground text-background">
    <div className="container-tight py-6 md:py-8">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
        {items.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center justify-center gap-2 md:gap-3">
            <Icon className="h-5 w-5 text-[hsl(var(--primary-glow))] shrink-0" />
            <span className="text-sm md:text-base font-semibold">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
