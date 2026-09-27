import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  { q: "O que o produto remove?", a: "O Removedor Lume ajuda a retirar fiapos, pelos e pequenas bolinhas acumuladas na superfície da roupa." },
  { q: "É fácil de usar?", a: "Sim. Liga o aparelho e passa-o suavemente sobre o tecido para recolher os fiapos." },
  { q: "Posso usar em diferentes tipos de roupa?", a: "Pode ser usado em diferentes peças. Em tecidos delicados, testa primeiro numa zona discreta e evita pressionar o aparelho." },
  { q: "Quanto custa?", a: "O Removedor de Fiapos Lume custa 9.000 Kz." },
  { q: "Como funciona a entrega?", a: "A entrega é combinada para uma morada ou ponto de referência em Luanda." },
  { q: "Posso pagar na entrega?", a: "Sim. Não precisas pagar agora; o pagamento é feito quando receberes o pedido." },
  { q: "Vocês entregam em Luanda?", a: "Sim, fazemos entregas em Luanda." },
];

export const FAQ = () => (
    <section id="faq" className="story-section border-t border-border bg-muted/40">
    <div className="container-tight max-w-3xl mx-auto">
      <Reveal>
        <span className="section-label">Perguntas frequentes</span>
        <h2 className="section-title mt-3">
          Tudo o que precisas de saber
        </h2>
      </Reveal>
      <Reveal delay={100}>
      <Accordion type="single" collapsible className="mt-8 border-y border-border">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-b last:border-0">
            <AccordionTrigger className="font-display font-semibold text-left text-base md:text-lg hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      </Reveal>
    </div>
  </section>
);
