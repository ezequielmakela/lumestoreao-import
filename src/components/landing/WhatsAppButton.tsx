import { MessageCircle } from "lucide-react";
import { buildSimpleUrl } from "@/lib/whatsapp";

export const WhatsAppButton = () => (
  <a
    href={buildSimpleUrl()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-28 right-4 z-30 grid h-12 w-12 place-items-center rounded-full border border-border bg-foreground text-background shadow-soft transition-opacity hover:opacity-85 md:bottom-6 md:right-6 md:h-14 md:w-14"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);
