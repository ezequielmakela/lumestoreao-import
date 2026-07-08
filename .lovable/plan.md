## O que é o repo
`ezequielmakela/lumestoreao` — landing page de venda do **Removedor de Fiapos Lume** (single-page em português), stack antiga Lovable:
- Vite + React 18 + React Router (`src/pages/Index.tsx` + `NotFound.tsx`)
- Tailwind v3 com HSL tokens + shadcn/ui completo
- Supabase client
- Meta Pixel (`window.fbq`)
- WhatsApp button, sticky buy bar, checkout externo
- Fontes Montserrat / Open Sans
- Assets: `hero.jpg`, `before.jpg`, `after.jpg`, `product.jpg`, `logo.svg`

Componentes de seção: Navbar, Hero, UrgencyBar, SocialProof, PainSection, ProblemSolution, Benefits, ProductSection, BeforeAfterSlider, Offer, SocialWall, FAQ, Footer, WhatsAppButton, StickyBuyBar, Reveal, Typewriter, NavLink.

## Como vou portar para este projeto (TanStack Start + Tailwind v4)

### 1. Assets
Copiar `hero.jpg`, `before.jpg`, `after.jpg`, `product.jpg`, `logo.svg` para `src/assets/` (via download bruto do GitHub).

### 2. Design tokens
Migrar o CSS de `src/index.css` (Tailwind v3, `@tailwind base/components/utilities`, tokens HSL, sombras, gradientes, animações `fadeUp`/`pulseGlow`) para `src/styles.css` no formato Tailwind v4 (`@theme inline`, oklch onde possível ou mantendo HSL via `var(--…)`), preservando a paleta roxa (primary `263 70% 36%`), raio `0.75rem`, sombras `soft/elegant/card`, gradientes `hero/purple` e utilitários `container-tight`, `safe-bottom`, `text-balance`, `fade-up`, `pulse-glow`.

### 3. Fontes
Instalar `@fontsource/montserrat` e `@fontsource/open-sans`, importar em `src/start.ts`, registrar `font-display` / `font-body` no `@theme`.

### 4. shadcn/ui
Todos os componentes shadcn já existem neste projeto — reaproveitar. Instalar deps npm que ainda faltem (`sonner`, `embla-carousel-react`, `vaul`, `cmdk`, `input-otp`, `react-day-picker`, `react-resizable-panels`, `react-hook-form`, `@hookform/resolvers`, `zod`, `next-themes`, `recharts`, `date-fns`, `tailwindcss-animate` — mantido como plugin no v4, ou substituído por `tw-animate-css` já presente).

### 5. Componentes de landing
Portar tal-e-qual (JSX + Tailwind) para `src/components/landing/*`:
Navbar, Hero, UrgencyBar, SocialProof, PainSection, ProblemSolution, Benefits, ProductSection, BeforeAfterSlider, Offer, SocialWall, FAQ, Footer, WhatsAppButton, StickyBuyBar, Reveal, Typewriter — mais `NavLink`, `hooks/use-scroll-reveal`.

### 6. Página principal
Substituir o placeholder em `src/routes/index.tsx` pelo conteúdo de `src/pages/Index.tsx` (Navbar → Hero → UrgencyBar → SocialProof → PainSection → ProductSection → SocialWall → FAQ → Footer + WhatsAppButton + StickyBuyBar). Adicionar `head()` com título, description e OG em português para "Removedor de Fiapos Lume".
`NotFound` original vira o `notFoundComponent` no `__root.tsx` (já existe um genérico — vou traduzir para português e manter o visual).

### 7. Helpers
Portar `src/lib/checkout.ts` e `src/lib/whatsapp.ts` como estão (client-side).
Adicionar tipagem global para `window.fbq` e disparar `ViewContent` num `useEffect` da rota `/`.

### 8. Meta Pixel
Adicionar o script do Pixel no `__root.tsx` (dentro do `<head>` via `HeadContent` `scripts`) — precisarei do **Pixel ID**. Se você não me passar, deixo comentado com placeholder.

### 9. Supabase
O repo tem `src/integrations/supabase/client.ts` e `types.ts` mas nenhum componente da landing usa Supabase — a landing é puramente estática. **Não vou habilitar Lovable Cloud** a menos que você queira alguma funcionalidade backend (form de contato, captação de leads, etc.). Se quiser, me diga o que gravar.

### 10. `.env` / variáveis
O `.env` do repo contém `VITE_SUPABASE_*`. Como a landing não usa Supabase, não preciso portar nada. Se algum componente precisar de URL de checkout ou número de WhatsApp configurável, coloco no código (já são constantes hoje).

## O que NÃO vou fazer
- Não vou copiar `src/App.tsx`, `main.tsx`, `vite.config.ts`, `tailwind.config.ts`, `index.html`, `postcss.config.js` — a stack nova (TanStack Start, Tailwind v4) já tem os equivalentes.
- Não vou trazer `src/integrations/supabase/*` a menos que você peça backend.
- Não vou trazer testes (`src/test/*`) nem `.lovable/plan.md` antigo.

## Perguntas rápidas antes de eu executar
1. Confirmar: apenas a landing page (sem backend/Supabase)?
2. Você tem um **Facebook Pixel ID** para eu já embutir? (Se não, deixo o `<script>` do Pixel comentado.)
3. Depois que eu terminar, posso torná-lo público / você pode voltar o repo antigo para privado.

Se responder "pode ir" sem mais detalhes, eu assumo: (1) sem backend, (2) Pixel comentado com placeholder, (3) você cuida da visibilidade do repo antigo.
