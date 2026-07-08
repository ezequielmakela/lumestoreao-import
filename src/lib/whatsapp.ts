// Centralized WhatsApp config. Trocar o número aqui chega para atualizar todo o site.
export const WHATSAPP_NUMBER = "244900000000"; // formato internacional sem +

export const UNIT_PRICE = 10999;

export const formatKz = (n: number) =>
  new Intl.NumberFormat("pt-AO").format(n) + " kz";

export type OrderInfo = {
  name: string;
  phone: string;
  zone: string;
  qty: number;
};

export const buildOrderUrl = (o: OrderInfo) => {
  const total = o.qty * UNIT_PRICE;
  const msg =
    `Olá! Quero comprar o Removedor de Fiapos Lume.%0A%0A` +
    `*Nome:* ${o.name}%0A` +
    `*Telefone:* ${o.phone}%0A` +
    `*Zona de entrega:* ${o.zone}%0A` +
    `*Quantidade:* ${o.qty}%0A` +
    `*Total:* ${formatKz(total)}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
};

export const buildSimpleUrl = (text = "Olá! Tenho interesse no Removedor Lume") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
