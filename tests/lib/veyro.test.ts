import { expect, test } from "bun:test";
import {
  buildVeyroContactUrl,
  buildVeyroKitOrderUrl,
  buildVeyroOrderUrl,
  formatVeyroPrice,
  VEYRO_KIT,
  VEYRO_PRODUCTS,
} from "@/lib/veyro";

test("VEYRO products use the confirmed updated prices", () => {
  expect(VEYRO_PRODUCTS.map(({ price }) => price)).toEqual([12777, 9777, 4777]);
  expect(VEYRO_PRODUCTS.map(({ price }) => formatVeyroPrice(price))).toEqual([
    "12 777 Kz",
    "9 777 Kz",
    "4 777 Kz",
  ]);
});

test("VEYRO products use the confirmed reference prices", () => {
  expect(VEYRO_PRODUCTS.map(({ referencePrice }) => referencePrice)).toEqual([
    17477,
    14477,
    6777,
  ]);
  expect(VEYRO_PRODUCTS.map(({ referencePrice }) => formatVeyroPrice(referencePrice))).toEqual([
    "17 477 Kz",
    "14 477 Kz",
    "6 777 Kz",
  ]);
});

test("the complete kit has the confirmed offer and reference prices", () => {
  expect(VEYRO_KIT.price).toBe(22777);
  expect(formatVeyroPrice(VEYRO_KIT.price)).toBe("22 777 Kz");
  expect(VEYRO_KIT.referencePrice).toBe(38731);
  expect(formatVeyroPrice(VEYRO_KIT.referencePrice)).toBe("38 731 Kz");
});

test("product order links include the selected name and payment on delivery", () => {
  const product = VEYRO_PRODUCTS.find((item) => item.id === "crystal-vision");
  expect(product).toBeDefined();
  if (!product) return;
  const order = new URL(buildVeyroOrderUrl(product));
  expect(order.host).toBe("wa.me");
  expect(order.pathname).toBe("/244952355696");
  expect(order.searchParams.get("text")).toBe(
    "Olá, quero encomendar o VEYRO Crystal Vision da VEYRO. Pagamento na entrega.",
  );
});

test("kit order link uses the confirmed WhatsApp number and edition", () => {
  const order = new URL(buildVeyroKitOrderUrl());
  expect(order.host).toBe("wa.me");
  expect(order.pathname).toBe("/244952355696");
  expect(order.searchParams.get("text")).toBe(
    "Olá, quero garantir o Kit Completo VEYRO (Founders Edition)",
  );
});

test("general VEYRO contact uses the confirmed WhatsApp number", () => {
  const contact = new URL(buildVeyroContactUrl());
  expect(contact.pathname).toBe("/244952355696");
  expect(contact.searchParams.get("text")).toBe("Olá, gostaria de saber mais sobre a VEYRO.");
});