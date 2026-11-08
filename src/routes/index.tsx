import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { CustomerPhotos } from "@/components/landing/CustomerPhotos";
import { ProductSection } from "@/components/landing/ProductSection";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";
import { StickyBuyBar } from "@/components/landing/StickyBuyBar";
import { BenefitsSection, DiscoverySection, EditorialSteps, ProblemSection, TransformationSection } from "@/components/landing/StorySections";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { goToCheckout } from "@/lib/checkout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lume Store — Removedor de Fiapos em Angola" },
      {
        name: "description",
        content:
          "Recupera o aspeto limpo das tuas roupas com o Removedor de Fiapos Lume. Entrega em Luanda e pagamento na entrega.",
      },
      { property: "og:title", content: "Lume Store — Removedor de Fiapos em Angola" },
      {
        property: "og:description",
        content:
          "A tua roupa não está velha. Recupera o seu aspeto com o Removedor de Fiapos Lume por 9.000 Kz.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
      value: 9000,
      currency: "AOA",
    });
  }, []);

  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar onBuyClick={goToCheckout} />
      <main>
        <Hero onBuyClick={goToCheckout} />
        <ProblemSection />
        <DiscoverySection />
        <TransformationSection />
        <EditorialSteps />
        <BenefitsSection />
        <CustomerPhotos />
        <ProductSection onBuyClick={goToCheckout} />
        <FAQ />
        <FinalCTA onBuyClick={goToCheckout} />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyBuyBar onBuyClick={goToCheckout} />
    </div>
  );
}
