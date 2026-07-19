## Alterações

### 1. WhatsApp
- Atualizar `src/lib/whatsapp.ts`: `WHATSAPP_NUMBER = "2449523556"` e mensagem padrão para `"Olá, vi o Removedor de Fiapos e quero comprar."`.
- Atualizar `src/components/landing/Footer.tsx` (linha 17) para mostrar `WhatsApp: +244 952 3556`.

### 2. Substituir imagens antes/depois
- Fazer upload das 8 imagens como Lovable Assets (CDN) a partir de `/mnt/user-uploads/`:
  - `image.png` → `antes.jpg` (roupa preta com fiapos)
  - `image-2.png` → `depois.jpg` (roupa escura limpa)
  - `image-3.png` … `image-8.png` → `cliente-1.jpg` … `cliente-6.jpg`
- Substituir `src/assets/before.jpg` e `src/assets/after.jpg` pelos pointers `.asset.json` das novas fotos, atualizando os imports em:
  - `PainSection.tsx`
  - `BeforeAfterSlider.tsx`
  - `ProblemSolution.tsx`
  - `ProductSection.tsx` (só usa `afterImg` na galeria — trocar por `depois`)
- Remover os ficheiros binários antigos (`before.jpg`, `after.jpg`).

### 3. Nova secção "Clientes que já receberam o Removedor Lume"
- Criar `src/components/landing/CustomerPhotos.tsx`: grid responsivo (2 col mobile / 3 col desktop) com as 6 fotos de clientes, título centrado, legenda curta ("Entregas reais em Luanda"), e badge de prova social. Cada imagem em card com cantos arredondados e sombra suave, seguindo os tokens de design existentes.
- Inserir em `src/routes/index.tsx` **logo depois do `<Hero />`** e antes de `<UrgencyBar />`, para ficar imediatamente após o primeiro CTA.

### Detalhes técnicos
- Usar `lovable-assets create --file /mnt/user-uploads/<nome> --filename <nome>.jpg` e escrever cada pointer em `src/assets/<nome>.jpg.asset.json`.
- Nos componentes, importar o pointer JSON e usar `asset.url` como `src`.
- `alt` das fotos de clientes: "Cliente Lume com o Removedor de Fiapos recebido em Angola".
- Sem mudanças de lógica/backend.