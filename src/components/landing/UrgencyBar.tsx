import { Clock } from "lucide-react";

export const UrgencyBar = () => (
  <div className="bg-foreground text-background">
    <div className="container-tight py-2.5 flex items-center justify-center gap-2 text-center">
      <Clock className="h-4 w-4 text-[hsl(var(--primary-glow))] shrink-0" />
      <p className="text-xs md:text-sm font-semibold">
        Oferta válida hoje · Últimas unidades disponíveis
      </p>
    </div>
  </div>
);
