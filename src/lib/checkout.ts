// Link de checkout externo (Kikolo). Trocar aqui para atualizar todo o site.
export const CHECKOUT_URL =
  "https://pay.kikoloonline.com/?p_id=69e9254aeafa432f02bd6cbc";

export const goToCheckout = () => {
  try {
    window.fbq?.("track", "InitiateCheckout", {
      content_ids: ["lume-removedor"],
      num_items: 1,
      value: 10999,
      currency: "AOA",
    });
  } catch {}
  window.location.href = CHECKOUT_URL;
};
