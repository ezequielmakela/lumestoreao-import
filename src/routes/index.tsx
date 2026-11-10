import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { VeyroStorefront } from "@/components/landing/VeyroStorefront";
import { VEYRO_PRICE, VEYRO_PRODUCTS } from "@/lib/veyro";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VEYRO — Acessórios Quiet Luxury em Luanda" },
      {
        name: "description",
        content:
          "Descobre a seleção de óculos, relógios e pulseiras VEYRO. Estilo discreto, compra simples pelo WhatsApp e pagamento na entrega em Luanda.",
      },
      { property: "og:title", content: "VEYRO — Acessórios Quiet Luxury em Luanda" },
      {
        property: "og:description",
        content: "Óculos, relógios e pulseiras escolhidos para um estilo discreto. Compra pelo WhatsApp e paga na entrega em Luanda.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "VEYRO — Acessórios Quiet Luxury em Luanda" },
      { name: "twitter:description", content: "Óculos, relógios e pulseiras VEYRO. Compra pelo WhatsApp em Luanda." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

function LandingPage() {
  useEffect(() => {
    const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
    fbq?.("track", "ViewContent", {
      content_name: "Coleção VEYRO",
      content_category: "Acessórios",
      content_ids: VEYRO_PRODUCTS.map((product) => `veyro-${product.id}`),
      content_type: "product_group",
      value: VEYRO_PRICE,
      currency: "AOA",
    });
  }, []);

  return (
    <VeyroStorefront />
  );
}
