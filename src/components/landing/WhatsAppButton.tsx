import { MessageCircle } from "lucide-react";
import { buildSimpleUrl } from "@/lib/whatsapp";

export const WhatsAppButton = () => (
  <a
    href={buildSimpleUrl()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="whatsapp-link fixed bottom-28 right-4 z-30 inline-flex h-12 items-center gap-2 rounded-full border border-border bg-foreground px-3 text-background shadow-soft transition-transform hover:-translate-y-1 md:bottom-6 md:right-6 md:h-14 md:px-5"
  >
    <MessageCircle className="h-6 w-6" />
    <span className="hidden text-xs font-bold uppercase md:inline">Falar no WhatsApp</span>
  </a>
);
