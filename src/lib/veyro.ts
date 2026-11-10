export const VEYRO_PRICE = 9777;
export const VEYRO_REFERENCE_PRICE = 12477;

export type VeyroProduct = {
  id: string;
  name: string;
  category: string;
  image: string;
  alt: string;
  option?: { label: string; value: string };
};

export const VEYRO_PRODUCTS: VeyroProduct[] = [
  {
    id: "oculos-transparente",
    name: "Óculos Transparente",
    category: "Óculos",
    image: "glasses",
    alt: "Óculos de armação transparente sobre fundo cinza-claro",
    option: { label: "Cor", value: "Transparente" },
  },
  {
    id: "relogio-quadrado",
    name: "Relógio Quadrado",
    category: "Relógios",
    image: "watch",
    alt: "Relógio de mostrador quadrado preto sobre fundo cinza-claro",
  },
  {
    id: "pulseira",
    name: "Pulseira",
    category: "Pulseiras",
    image: "bracelet",
    alt: "Pulseira de elos sobre fundo cinza-claro",
  },
];

export const formatVeyroPrice = (price: number) =>
  `${new Intl.NumberFormat("pt-AO").format(price)} Kz`;

export const buildVeyroOrderUrl = (product: VeyroProduct) => {
  const optionText = product.option ? ` Opção: ${product.option.value}.` : "";
  const message = `Olá, quero garantir o ${product.name} da VEYRO.${optionText} Pagamento na entrega.`;
  return `https://wa.me/244952355696?text=${encodeURIComponent(message)}`;
};