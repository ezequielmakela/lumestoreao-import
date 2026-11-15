import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

export type VeyroProduct = {
  id: string;
  name: string;
  category: string;
  alt: string;
  description: string;
  referencePrice: number;
  price: number;
};

export const VEYRO_PRODUCTS: VeyroProduct[] = [
  {
    id: "classic-square",
    name: "VEYRO Classic Square",
    category: "Relógios",
    alt: "Relógio quadrado VEYRO com pulseira de couro azul profundo",
    description:
      "O tempo sob a tua própria direção. Caixa quadrada em aço escovado e pulseira em couro azul profundo. Uma peça para quem não precisa de olhar para o relógio para saber que está atrasado.",
    referencePrice: 17477,
    price: 12777,
  },
  {
    id: "crystal-vision",
    name: "VEYRO Crystal Vision",
    category: "Óculos",
    alt: "Óculos VEYRO de armação transparente crystal e lentes fumadas",
    description:
      "A transparência do detalhe. Armação crystal com lentes fumadas, desenhada para elevar o look sem esforço. A discrição que fala por si antes mesmo de abrires a boca.",
    referencePrice: 14477,
    price: 9777,
  },
  {
    id: "signature-cord",
    name: "VEYRO Signature Cord",
    category: "Pulseiras",
    alt: "Pulseira VEYRO Signature Cord sobre fundo cinza-claro",
    description:
      "A assinatura final. O detalhe mínimo que muda a perceção. Ajustável, discreta e indispensável.",
    referencePrice: 6777,
    price: 4777,
  },
];

export const VEYRO_KIT = {
  name: "O Kit Completo (Founders Edition)",
  description:
    "O verdadeiro luxo não se divide. Adquire o Kit completo (Relógio Classic Square + Crystal Vision + Signature Cord) e recebe o teu Cartão de Membro Fundador numerado, com entrega VIP em Luanda.",
  referencePrice: 38731,
  price: 22777,
};

export const formatVeyroPrice = (price: number) =>
  `${new Intl.NumberFormat("pt-AO").format(price)} Kz`;

export const buildVeyroOrderUrl = (product: VeyroProduct) => {
  const message = `Olá, quero encomendar o ${product.name} da VEYRO. Pagamento na entrega.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const buildVeyroKitOrderUrl = () => {
  const message = "Olá, quero garantir o Kit Completo VEYRO (Founders Edition)";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const buildVeyroContactUrl = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, gostaria de saber mais sobre a VEYRO.")}`;