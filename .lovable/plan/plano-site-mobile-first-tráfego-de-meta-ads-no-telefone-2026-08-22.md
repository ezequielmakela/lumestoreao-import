# Plano: Site mobile-first (tráfego de Meta Ads no telefone)

O termo que procuras é **design responsivo / mobile-first** (com "media queries"). Como o tráfego virá de anúncios no Meta e 100% pelo telefone, vamos tratar o mobile como a experiência principal — não como adaptação do desktop.

## Diagnóstico atual (confirmado no código)

- **Imagens pesadíssimas**: `antes.jpg` (2,2 MB), `depois.jpg` (2,1 MB), clientes entre 1–1,7 MB. Num 3G/4G em Angola a página demora muitos segundos a abrir — é o maior inimigo da conversão vinda de anúncios.
- **Navbar mobile sem CTA**: o botão "Comprar Agora" está escondido em ecrãs pequenos (`hidden sm:inline-flex`).
- **Secção "Entregas reais" exige scroll longo demais**: 7 fotos × 90vh ≈ 6 ecrãs inteiros de scroll só nessa secção — cansativo no telefone.
- **Botão WhatsApp flutuante pode encostar na barra fixa de compra** em telefones com notch/barra de gestos.
- Tipografia e espaçamentos pensados primeiro para desktop (`text-4xl` no hero mobile, paddings amplos).

## O que vamos fazer

### 1. Performance das imagens (prioridade máxima)
- Redimensionar e comprimir todas as imagens de `public/images/` (máx. ~1080px de largura, qualidade otimizada) — meta: cada uma abaixo de ~250 KB. De ~12 MB totais para ~1,5 MB.
- Manter `fetchpriority="high"` só na imagem principal do hero; as restantes com lazy loading.
- Adicionar `width`/`height` onde faltar para evitar "saltos" de layout durante o carregamento.

### 2. Hero pensado para o polegar
- Título com escala mobile adequada, preço em destaque logo visível sem scroll.
- Botão "Pague apenas na entrega" a ocupar largura total no telefone, altura mínima de 48px (alvo de toque confortável).
- Slider antes/depois logo a seguir, com altura ajustada ao ecrã do telefone.

### 3. Navbar mobile
- Mostrar um botão compacto "Comprar" também em ecrãs pequenos (ao lado do ícone de tema e menu).
- Garantir que o menu aberto tem alvos de toque ≥ 44px.

### 4. Secção "Entregas reais" mais leve no telefone
- Reduzir o comprimento do scroll horizontal no mobile (~45–55vh por foto em vez de 90vh), mantendo o efeito de deslize automático.
- Cartões com largura otimizada para ver ~1,3 fotos por ecrã (dá pista visual de que há mais).

### 5. Barra fixa de compra + WhatsApp sem sobreposição
- Respeitar `safe-area` (iPhone/Android com gestos) na barra de compra.
- Reposicionar o botão WhatsApp para nunca colidir com a barra.

### 6. Ritmo vertical e alvos de toque
- Rever paddings/margens de todas as secções no mobile (UrgencyBar, SocialProof, Produto, FAQ, Footer).
- Todos os botões e links tocáveis com mínimo de 44px.

### 7. Validação
- Testar com screenshots automatizados em 375×667 e 393×667 (telemóveis típicos), verificando: hero sem scroll lateral, imagens a carregar, carrossel a deslizar, barra fixa e WhatsApp sem colisão.

## Fora de scope
- Sem mudanças de textos, preços, cores ou estrutura de secções — apenas otimização mobile e performance.
