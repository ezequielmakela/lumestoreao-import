import { expect, test } from "bun:test";
import {
  formatVeyroPrice,
  VEYRO_PRICE,
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