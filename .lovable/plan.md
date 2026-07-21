## Objetivo

Adicionar a nova foto de entrega, tirar o "efeito bolinha" atrás dos badges de oferta e afinar UI/performance para conduzir à compra.

## Alterações

1. **Nova foto nas Entregas reais**
   - Subir `user-uploads://cliente-6.jpg.jpeg` para `public/images/cliente-7.jpg` (JPG local, servido pelo próprio host, igual às outras).
   - Em `src/components/landing/CustomerPhotos.tsx`, acrescentar `/images/cliente-7.jpg` ao array `photos` (fica no carrossel arrastável).

2. **Remover o "efeito bolinha" atrás dos badges de oferta**
   - O halo vem da classe `pulse-glow` (e do fundo `bg-primary/10` a criar a "pílula" iluminada) aplicada aos badges "Entrega grátis hoje em Luanda" e "Paga apenas na entrega".
   - Em `src/components/landing/Hero.tsx` e `src/components/landing/ProductSection.tsx`: trocar os badges por uma linha limpa, sem fundo colorido nem glow — apenas ícone + texto em `text-foreground/80`, separados por um divisor subtil (`•`), alinhados com o resto do bloco.
   - Confirmar que nada mais nos badges usa `pulse-glow`/`shadow-glow`.

3. **UI/UX — alinhamento**
   - Hero: normalizar spacing vertical (`mt-*`) para ritmo consistente entre headline → preço → linha de oferta → CTA → trust row.
   - Trust row (3 ícones) e badges: mesma baseline, mesmo tamanho de ícone (`h-4 w-4`) e mesmo peso tipográfico.
   - ProductSection: mesma linha de oferta que o Hero, para ficar coerente.

4. **Performance das imagens**
   - Em `CustomerPhotos.tsx`: manter `loading="lazy"` nas seguintes; marcar a **primeira** foto do carrossel como `loading="eager"` + `fetchpriority="high"` e adicionar `decoding="async"` a todas.
   - Em `BeforeAfterSlider` (Hero, acima da dobra): `fetchpriority="high"` no "antes" e "depois", `decoding="async"`; manter as dimensões `width`/`height` para reservar espaço (evita CLS).
   - `ProductSection`: `loading="lazy"` + `decoding="async"` nas thumbs.
   - Sem conversão para WebP nesta iteração (mantém repo simples); só metadados de loading.

## Fora do escopo

- Redesenhar secções, mudar copy, mudar cores/tema, comprimir para WebP, ou mexer em checkout/WhatsApp.
