import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  { q: "Funciona em qualquer roupa?", a: "Pode ser usado em malha, lã, algodão, casacos, cobertores e estofados. Passa o aparelho suavemente e testa primeiro numa área discreta de tecidos delicados." },
  { q: "Precisa de tomada para funcionar?", a: "Não durante o uso. O Removedor Lume tem bateria recarregável." },
  { q: "Qual o prazo de entrega?", a: "Em Luanda entregamos em 1 a 3 dias úteis. Outras províncias: 3 a 7 dias úteis." },
  { q: "Recebo antes de pagar?", a: "Sim. Nas zonas com pagamento na entrega, recebes o pedido em casa e pagas no momento da entrega." },
  { q: "Tem garantia?", a: "Sim. 7 dias de garantia. Se não ficares satisfeito, trocamos ou devolvemos o teu dinheiro." },
];

export const FAQ = () => (
    <section className="border-t border-border bg-muted/40 py-14 md:py-20">
    <div className="container-tight max-w-3xl mx-auto">
      <Reveal>
        <span className="section-label">Dúvidas frequentes</span>
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
