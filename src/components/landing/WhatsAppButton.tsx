import { MessageCircle } from "lucide-react";
import { buildSimpleUrl } from "@/lib/whatsapp";

export const WhatsAppButton = () => (
  <a
    href={buildSimpleUrl()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-elegant hover:scale-110 transition-transform ring-4 ring-[#25D366]/30 pulse-glow"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);
