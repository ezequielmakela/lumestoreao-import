import { MessageCircle, Instagram, MapPin } from "lucide-react";
import { buildSimpleUrl } from "@/lib/whatsapp";

export const Footer = () => (
  <footer className="border-t border-background/15 bg-foreground py-12 text-background">
    <div className="container-tight grid gap-12 md:grid-cols-12">
      <div className="md:col-span-6">
        <h3 className="font-display text-3xl font-extrabold uppercase">Lume Store</h3>
        <p className="mt-4 max-w-sm leading-relaxed text-background/60">
          Produtos simples. Problemas reais. Soluções inteligentes.
        </p>
      </div>
      <div className="md:col-span-3">
        <h4 className="font-display text-xs font-bold uppercase text-background/50">Contacto</h4>
        <ul className="mt-5 space-y-4 text-sm text-background/75">
          <li><a href={buildSimpleUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary"><MessageCircle className="h-4 w-4 text-primary" /> WhatsApp</a></li>
          <li><a href="https://www.instagram.com/lumestore.ao/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary"><Instagram className="h-4 w-4 text-primary" /> Instagram</a></li>
          <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Luanda, Angola</li>
        </ul>
      </div>
      <div className="md:col-span-3">
        <h4 className="font-display text-xs font-bold uppercase text-background/50">Informação</h4>
        <p className="mt-5 text-sm leading-7 text-background/60">Política de privacidade e termos serão publicados quando o conteúdo legal estiver disponível.</p>
      </div>
    </div>
    <div className="container-tight mt-10 pt-8 border-t border-background/10 text-sm text-background/60">
      <p>© {new Date().getFullYear()} Lume Store. Todos os direitos reservados.</p>
    </div>
  </footer>
);
