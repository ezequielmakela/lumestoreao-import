# Corrigir imagens em lumestore.store (host externo via GitHub)

## Causa

As imagens (antes/depois e clientes 1–6) estão guardadas como `.asset.json` a apontar para `/__l5e/assets-v1/...`. Esse caminho **só existe nos servidores da Lovable** (preview e sites `.lovable.app`). Como `lumestore.store` está hospedado fora da Lovable (a partir do repo do GitHub), esse endpoint não existe nesse host e as imagens ficam a 404 — por isso funcionam aqui no preview mas não no domínio real.

## Solução

Descarregar os 8 ficheiros do CDN e commitá-los diretamente no repo em `public/images/`, servidos pelo próprio host. Substituir todas as referências aos `.asset.json` por caminhos absolutos (`/images/nome.jpg`), que funcionam em qualquer hospedagem (Lovable, Vercel, Netlify, etc.).

## Passos

1. Descarregar do CDN para `public/images/` (mantendo os nomes originais):
   - `antes.jpg`, `depois.jpg`
   - `cliente-1.jpg` … `cliente-6.jpg`
2. Trocar imports/URLs em:
   - `src/components/landing/BeforeAfterSlider.tsx`
   - `src/components/landing/ProblemSolution.tsx` (se ainda referenciado)
   - `src/components/landing/ProductSection.tsx` (`afterAsset`)
   - `src/components/landing/CustomerPhotos.tsx` (c1…c6)
   - Qualquer outro sítio que use os `.asset.json` das imagens em questão
   
   De:
   ```ts
   import a from "@/assets/antes.jpg.asset.json";
   <img src={a.url} />
   ```
   Para:
   ```tsx
   <img src="/images/antes.jpg" />
   ```
3. Apagar os `.asset.json` correspondentes em `src/assets/` (deixam de ser usados).
4. Verificar build (`bun run build`) e conferir que o HTML gerado referencia `/images/...`.

## Notas

- O logo SVG (`src/assets/logo.svg`) já é local, não precisa de mudança.
- Como as imagens vão passar a viver no repo, o tamanho do GitHub aumenta ~12 MB (8 imagens ~1–2 MB cada). Se preferires manter o repo leve, posso em vez disso comprimir para WebP (≈200–400 KB cada) antes de commitar — diz-me se queres essa otimização.

## Fora do escopo

- Mudar host, configurar CDN próprio, ou alterar layout/conteúdo.
