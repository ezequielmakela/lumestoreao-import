import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

export const VEYRO_PRICE = 9777;
export const VEYRO_REFERENCE_PRICE = 12477;

export type VeyroProduct = {
  id: string;
  name: string;
  category: string;
  alt: string;
  option?: { label: string; value: string };
};

export const VEYRO_PRODUCTS: VeyroProduct[] = [
  {
    id: "oculos-transparente",
    name: "Óculos Transparente",
    category: "Óculos",
    alt: "Óculos de armação transparente sobre fundo cinza-claro",
    option: { label: "Cor", value: "Transparente" },
  },
  {
    id: "relogio-quadrado",
    name: "Relógio Quadrado",
    category: "Relógios",
    alt: "Relógio de mostrador quadrado preto sobre fundo cinza-claro",
  },
  {
    id: "pulseira",
    name: "Pulseira",
    category: "Pulseiras",
    alt: "Pulseira de elos sobre fundo cinza-claro",
  },
];

export const formatVeyroPrice = (price: number) =>
  `${new Intl.NumberFormat("pt-AO").format(price)} Kz`;

export const buildVeyroOrderUrl = (product: VeyroProduct) => {
  const message = `Olá, quero garantir o ${product.name} da VEYRO. Pagamento na entrega.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};