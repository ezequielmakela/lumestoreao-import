## Objetivo

Fazer o carrossel "Clientes que já receberam o Removedor Lume" rolar as imagens sozinho conforme o utilizador desce o scroll da página — sem precisar arrastar com o dedo.

## Comportamento

- Enquanto a secção está visível no viewport, a posição vertical do scroll controla o deslocamento horizontal da tira de fotos.
- Entrar na secção → primeira foto visível. Sair pelo fim → última foto visível. Entre os dois pontos, as fotos deslizam da direita para a esquerda proporcionalmente ao scroll.
- Continua a funcionar bem em mobile (onde o pedido foi feito) e em desktop.
- Mantém o arrastar com o dedo como fallback só se necessário; por defeito, o gesto passa para o scroll da página (utilizador não precisa arrastar).

## Alterações

1. **`src/components/landing/CustomerPhotos.tsx`** — reescrever a secção:
   - Remover o `Carousel` (Embla) atual e as setas prev/next.
   - Criar um contentor "sticky" com altura vertical maior (ex.: `h-[300vh]` numa div externa) e, lá dentro, uma faixa horizontal `sticky top-0 h-screen` com `overflow: hidden`.
   - Faixa horizontal (`<ul>` flex row) contém as 7 fotos com largura fixa por item (ex.: `w-[75vw] md:w-[38vw] lg:w-[28vw]`) e `gap` consistente.
   - Um pequeno hook local calcula o progresso (0 → 1) com base na posição do wrapper externo relativamente ao viewport e aplica `transform: translate3d(-progress * (scrollWidth - viewportWidth), 0, 0)` na faixa.
   - Usar `requestAnimationFrame` + listener `scroll` passivo; cleanup no unmount. Sem libs novas.
   - Remover a dica "Arrasta para ver mais" (deixa de ser preciso).
   - Manter atributos de performance existentes: `loading="lazy"` (primeira `eager`), `decoding="async"`, `fetchpriority="high"` na primeira.
   - Manter o cabeçalho ("Entregas reais", H2 e subtítulo) fora da zona sticky, no topo da secção.

2. **Acessibilidade / fallback**
   - Se `prefers-reduced-motion: reduce`, desligar o efeito: mostrar as fotos numa grelha simples (ou faixa scrollável horizontal nativa) sem prender o scroll vertical.
   - Em ecrãs muito estreitos onde a soma das fotos couber, não aplicar o efeito.

## Fora do escopo

- Não mexer noutras secções (Hero, Offer, ProductSection, Footer).
- Não trocar as fotos nem os textos.
- Não introduzir bibliotecas de animação (sem GSAP/Framer); só CSS + rAF.
