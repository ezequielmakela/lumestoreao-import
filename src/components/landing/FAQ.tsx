import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  { q: "Qual o prazo de entrega?", a: "Em Luanda entregamos em 1 a 3 dias úteis. Outras províncias: 3 a 7 dias úteis." },
  { q: "Como funciona o pagamento?", a: "Aceitamos transferência bancária, Multicaixa Express e pagamento na entrega (em zonas selecionadas). Combinamos tudo pelo WhatsApp depois do pedido." },
  { q: "Tem garantia?", a: "Sim. 7 dias de garantia. Se não ficares satisfeito, trocamos ou devolvemos o teu dinheiro." },
  { q: "Funciona em todos os tecidos?", a: "Sim. Malha, lã, algodão, casacos, cobertores e até estofados. A lâmina é protegida por uma grade de segurança." },
];

export const FAQ = () => (
  <section className="py-16 md:py-24 bg-muted/40">
    <div className="container-tight max-w-3xl mx-auto">
      <Reveal className="text-center">
        <span className="text-primary font-bold uppercase tracking-wider text-xl">FAQ</span>
        <h2 className="mt-3 font-display font-extrabold text-3xl md:text-5xl leading-tight text-balance">
          Tudo o que você precisa saber
        </h2>
      </Reveal>
      <Reveal delay={100}>
      <Accordion type="single" collapsible className="mt-10 bg-card rounded-2xl px-6 shadow-card-elegant">
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
