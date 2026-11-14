import { expect, test } from "bun:test";
import {
  buildVeyroContactUrl,
  buildVeyroOrderUrl,
  formatVeyroPrice,
  VEYRO_PRICE,
  VEYRO_PRODUCTS,
  VEYRO_REFERENCE_PRICE,
} from "@/lib/veyro";

test("VEYRO sale price is 9,777 Kz", () => {
  expect(VEYRO_PRICE).toBe(9777);
  expect(formatVeyroPrice(VEYRO_PRICE)).toBe("9 777 Kz");
});

test("VEYRO reference price is 12,477 Kz", () => {
  expect(VEYRO_REFERENCE_PRICE).toBe(12477);
  expect(formatVeyroPrice(VEYRO_REFERENCE_PRICE)).toBe("12 477 Kz");
});

test("product order links include the selected name and payment on delivery", () => {
  const product = VEYRO_PRODUCTS.find((item) => item.id === "oculos-transparente");
  expect(product).toBeDefined();
  if (!product) return;
  const order = new URL(buildVeyroOrderUrl(product));
  expect(order.host).toBe("wa.me");
  expect(order.pathname).toBe("/244952355696");
  expect(order.searchParams.get("text")).toBe(
    "Olá, quero garantir o Óculos Transparente da VEYRO. Pagamento na entrega.",
  );
});

test("general VEYRO contact uses the confirmed WhatsApp number", () => {
  const contact = new URL(buildVeyroContactUrl());
  expect(contact.pathname).toBe("/244952355696");
  expect(contact.searchParams.get("text")).toBe("Olá, gostaria de saber mais sobre a VEYRO.");
});