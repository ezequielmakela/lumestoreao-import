import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { UrgencyBar } from "@/components/landing/UrgencyBar";
import { SocialProof } from "@/components/landing/SocialProof";
import { CustomerPhotos } from "@/components/landing/CustomerPhotos";
import { ProductSection } from "@/components/landing/ProductSection";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";
import { StickyBuyBar } from "@/components/landing/StickyBuyBar";
import { goToCheckout } from "@/lib/checkout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lume Store — Removedor de Fiapos" },
      {
        name: "description",
        content:
          "Removedor de Fiapos Lume — remove fiapos, pelos e bolinhas em segundos. Entrega em Angola. Peça o seu hoje.",
      },
      { property: "og:title", content: "Lume Store — Removedor de Fiapos" },
      {
        property: "og:description",
        content:
          "Removedor de Fiapos Lume — remove fiapos, pelos e bolinhas em segundos. Entrega em Angola.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

function LandingPage() {
  useEffect(() => {
    const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
    fbq?.("track", "ViewContent", {
      content_name: "Removedor de Fiapos Lume",
      content_category: "Removedor de Fiapos",
      content_ids: ["lume-removedor"],
      content_type: "product",
      value: 10999,
      currency: "AOA",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onBuyClick={goToCheckout} />
      <main>
        <Hero onBuyClick={goToCheckout} />
        <CustomerPhotos />
        <UrgencyBar />
        <SocialProof />
        <PainSection />
        <ProductSection onBuyClick={goToCheckout} />
        <SocialWall />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyBuyBar onBuyClick={goToCheckout} />
    </div>
  );
}
