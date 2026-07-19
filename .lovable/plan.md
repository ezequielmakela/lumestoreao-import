# Refinamentos na Landing Lume

## 1. Corrigir número de WhatsApp
- Atualizar `src/lib/whatsapp.ts`: `WHATSAPP_NUMBER = "244952355696"`.
- Atualizar `src/components/landing/Footer.tsx` para exibir `+244 952 355 696`.

## 2. Remover secções desnecessárias
- Remover `PainSection` ("Tuas roupas estão assim / Resolve em segundos") de `src/routes/index.tsx` (o antes/depois já aparece no Hero).
- Remover `SocialWall` ("Angolanos que aprovaram") de `src/routes/index.tsx` — sem provas reais, não faz sentido manter.
- Manter os ficheiros no repo (não usados), ou apagá-los. Proposta: apagar `PainSection.tsx` e `SocialWall.tsx` para limpar.

## 3. Fotos de clientes como carrossel
- Converter `CustomerPhotos` num carrossel arrastável (swipe no mobile, drag no desktop) em vez de grid estático.
- Usar o `carousel` do shadcn (embla) que já está disponível, com autoplay suave e snap por item.
- Mostrar 1.2 imagens no mobile e 3 no desktop, com indicador de progresso discreto.

## 4. Alinhar barra de trust ("+30 clientes / Entrega grátis / Garantia 7 dias")
- Reorganizar `SocialProof` e a mini trust row do Hero para um layout limpo e alinhado (grid uniforme, mesma altura, ícones consistentes, espaçamento igual).
- Remover ícones/emojis decorativos que não acrescentam significado (ex.: `AArrowDown` placeholder no `SocialProof` e no `ProductSection`, o item vazio `"​"`).

## 5. Dark / Light mode
- Adicionar toggle de tema (sol/lua) na `Navbar`.
- Implementar com classe `.dark` no `<html>`, persistindo em `localStorage`, com leitura em `useEffect` (evitar mismatch SSR).
- Garantir que os tokens em `src/styles.css` já têm variante `.dark` — se não tiverem, adicionar paleta escura coerente (fundo escuro, primário mantido, contrastes ajustados).

## 6. Reforçar a oferta
- No Hero e no `ProductSection`, logo abaixo do preço, adicionar linha destacada:
  - **"Entrega grátis hoje em Luanda"**
  - **"Recebe em casa e paga apenas na entrega"**
- Usar chip/badge com ícone `Truck` e `HandCoins`/`Wallet` para dar peso visual sem poluir.

## 7. Polimento profissional geral
- Rever espaçamentos entre secções (ritmo consistente `py-16 md:py-24`).
- Uniformizar tipografia dos títulos de secção.
- Remover caracteres invisíveis (`\u200b`) usados como placeholder.

## Detalhes técnicos
- Ficheiros a editar: `src/lib/whatsapp.ts`, `src/components/landing/Footer.tsx`, `src/routes/index.tsx`, `src/components/landing/CustomerPhotos.tsx`, `src/components/landing/SocialProof.tsx`, `src/components/landing/Hero.tsx`, `src/components/landing/ProductSection.tsx`, `src/components/landing/Navbar.tsx`, `src/styles.css`.
- Ficheiros a apagar: `src/components/landing/PainSection.tsx`, `src/components/landing/SocialWall.tsx`.
- Novo hook: `src/hooks/use-theme.tsx` para dark/light.
- Carrossel: usar `@/components/ui/carousel` (embla) já instalado no shadcn.

## Fora do escopo
- Alterações de backend / checkout.
- Novos assets de imagem.
