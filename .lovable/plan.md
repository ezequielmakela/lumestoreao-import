## Problema

O efeito de rolagem horizontal está a correr, mas o deslocamento calculado é sempre 0. A faixa `<ul>` está dentro de um contentor `flex items-center overflow-hidden`, mas o próprio `<ul>` estica com o conteúdo, então `scrollWidth === clientWidth` e `maxShift = scrollWidth - clientWidth = 0`. Resultado: `translate3d(0,0,0)` durante todo o scroll.

## Correção (`src/components/landing/CustomerPhotos.tsx`)

- Calcular o deslocamento máximo com `track.scrollWidth - window.innerWidth` (o viewport é a janela visível), em vez de `track.clientWidth`.
- Garantir que o `<ul>` pode exceder a largura do sticky: mudar a estrutura para
  - `sticky top-0 h-screen w-full overflow-hidden`
  - `<ul class="flex ... w-max">` (largura pelo conteúdo) para que `scrollWidth` reflita o total real.
- Manter tudo o resto (reduced-motion fallback, lazy loading, atributos de imagem).

## Fora do escopo

- Não mexer noutras secções.
