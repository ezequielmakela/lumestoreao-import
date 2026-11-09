# Landing page VEYRO — Quiet Luxury

## Objetivo
Substituir a página atual da Lume Store por uma experiência mobile-first de e-commerce VEYRO para óculos, relógios e pulseiras, com estética editorial de luxo, compra simples pelo WhatsApp e sem alegações de produto ou prova social inventadas.

## Experiência
1. Cabeçalho fino e transparente, com VEYRO centrado, navegação curta para coleção e botão de explorar; sem carrinho.
2. Abertura editorial escura, com fotografia de um jovem negro usando óculos e a mensagem “O ESTILO CERTO NÃO FAZ BARULHO.”; botão “EXPLORAR COLEÇÃO”.
3. Grelha de três produtos — Óculos Transparente, Relógio Quadrado e Pulseira — em fundos cinza-claro, com preço de 12.477 Kz riscado e preço atual de 9.777 Kz.
4. Ao selecionar um produto, abrir uma ficha/modal ampla, otimizada para telefone, com imagem em destaque, nome, preço e opções confirmadas. Para os óculos, usar “Transparente”; não presumir cores ou especificações dos outros itens.
5. Ação de compra acessível no rodapé da ficha: “Comprar via WhatsApp”, com mensagem personalizada para o produto e “Pagamento na entrega”. Reutilizar o número de WhatsApp já configurado no site até ser fornecido outro.
6. Prova social antes do rodapé: “Mais de 15 membros já entraram no Clube VEYRO”, dado confirmado pelo utilizador.
7. Rodapé limpo com marca, localização “Luanda, Angola” e acessos a Instagram/TikTok sem inventar endereços de perfis.

## Direção visual e conteúdo
- Base off-white, texto preto e botões pretos com texto branco, definidos como tokens semânticos.
- Cormorant Garamond itálico para títulos; Montserrat Light para textos, navegação e botões.
- Composição editorial com bastante espaço livre, linhas finas, imagens de produto sobre cinza-claro e interações discretas; evitar sombras pesadas, gradientes e elementos flutuantes fora da ficha de produto.
- Criar imagens editoriais adequadas ao conceito caso não existam fotografias VEYRO; não apresentá-las como fotos exatas de inventário. Usar nomes e dados comerciais fornecidos, sem inventar materiais, funcionalidades, avaliações ou garantias.
- Design mobile-first e revisão nos tamanhos indicados: 375, 390, 430, 768, 1024, 1440 e 1920 px; respeitar movimento reduzido, navegação por teclado e foco visível.

## Implementação técnica
- Adaptar a página inicial e componentes existentes em React/TanStack Start e Tailwind v4; substituir a narrativa, conteúdo, cores e eventos Lume, mantendo componentes reutilizáveis e os padrões da aplicação.
- Criar cartões de produto e ficha acessível com seleção, fecho e ação WhatsApp; mensagem inclui nome do produto e pagamento na entrega.
- Atualizar metadados próprios da página para VEYRO, preservar a estrutura do título/descrição/Open Graph e atualizar a identidade visual do favicon.
- Atualizar a medição existente para refletir VEYRO e o preço de 9.777 Kz, sem adicionar integrações ou checkout externo.
- Validar carregamento de imagens, fluxo de seleção e clique para WhatsApp, metadados, erros de consola e layouts nas sete larguras previstas.

## Pressupostos e limites
- A página atual da Lume Store será substituída, conforme confirmado.
- Preço original riscado (12.477 Kz), preço atual (9.777 Kz) e contagem social (mais de 15) foram confirmados.
- O número WhatsApp atual será mantido; Instagram e TikTok ficam sem URLs inventados até haver perfis oficiais.
- Imagens geradas ou editoriais são imagens de conceito; fotografias reais dos produtos podem substituí-las quando disponíveis.
