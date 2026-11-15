# Atualização da coleção VEYRO

## Objetivo
Transformar a secção atual numa coleção editorial de três acessórios, com os novos nomes, textos e preços fornecidos, além de uma oferta destacada do Kit Completo. As compras continuam simples e sem carrinho, com encaminhamento direto para WhatsApp.

## Experiência
1. Apresentar “A Coleção” numa grelha de uma coluna no telemóvel e três no desktop, preservando a identidade off-white/preto, Cormorant Garamond e Montserrat.
2. Mostrar cada produto com imagem, título, descrição, preço anterior riscado e novo preço; usar as imagens enviadas para o relógio azul e os óculos e a imagem existente da pulseira.
3. Incluir em cada produto um botão “Encomendar via WhatsApp”, com mensagem personalizada e o número confirmado +244 952 355 696.
4. Adicionar logo abaixo da grelha a oferta escura “O Kit Completo (Founders Edition)”, com o texto, preços e chamada para WhatsApp indicados no documento.
5. Manter a experiência estática, rápida e sem carrinho; atualizar todos os preços e mensagens relevantes para refletirem a nova oferta.

## Validação
- Confirmar os três preços individuais e os valores do kit na página e nas mensagens de WhatsApp.
- Verificar visualmente a grelha no telemóvel e desktop, incluindo carregamento das imagens enviadas.
- Executar os testes existentes e rever os registos de compilação.

## Detalhes técnicos
- Atualizar os dados centralizados em `src/lib/veyro.ts` e a experiência da loja em `src/components/landing/VeyroStorefront.tsx`.
- Guardar as imagens enviadas no fluxo de ativos do projeto, mantendo os binários fora do código-fonte.
- Atualizar os testes de preços e links WhatsApp junto aos testes existentes.
