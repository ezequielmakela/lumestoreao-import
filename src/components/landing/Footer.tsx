import { MessageCircle, Instagram, MapPin } from "lucide-react";

export const Footer = () => (
  <footer className="bg-foreground text-background py-14">
    <div className="container-tight grid md:grid-cols-2 gap-10 md:gap-16">
      <div>
        <h3 className="font-display font-extrabold text-2xl">
          Lume​ Store
        </h3>
        <p className="mt-3 text-background/70 max-w-sm leading-relaxed">
          Tecnologia simples para devolver vida às suas roupas. Entrega em toda Luanda.
        </p>
      </div>
      <div>
        <h4 className="font-display font-bold uppercase text-sm tracking-wider text-background/80">Fale Conosco</h4>
        <ul className="mt-4 space-y-3 text-background/80">
          <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-[hsl(var(--primary-glow))]" /> WhatsApp: +244 900 000 000</li>
          <li><a href="https://www.instagram.com/lumestore.ao/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[hsl(var(--primary-glow))]"><Instagram className="h-4 w-4 text-[hsl(var(--primary-glow))]" /> @lumestore.ao</a></li>
          <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[hsl(var(--primary-glow))]" /> Luanda, Angola</li>
        </ul>
      </div>
    </div>
    <div className="container-tight mt-10 pt-8 border-t border-background/10 text-sm text-background/60">
      <p>© {new Date().getFullYear()} Lume Store. Todos os direitos reservados.</p>
    </div>
  </footer>
);
