import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, MessageCircle, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  buildVeyroContactUrl,
  buildVeyroKitOrderUrl,
  buildVeyroOrderUrl,
  formatVeyroPrice,
  VEYRO_KIT,
  VEYRO_PRODUCTS,
  type VeyroProduct,
} from "@/lib/veyro";
import heroImage from "@/assets/veyro-hero.webp";
import braceletImage from "@/assets/veyro-bracelet.webp";
import logoAsset from "@/assets/veyro-logo.png.asset.json";
import watchImage from "@/assets/veyro-classic-square-watch.jpg.asset.json";
import glassesImage from "@/assets/veyro-crystal-vision-glasses.jpg.asset.json";

const productImages: Record<string, string> = {
  "classic-square": watchImage.url,
  "crystal-vision": glassesImage.url,
  "signature-cord": braceletImage,
};

export function VeyroStorefront() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const trackWhatsAppClick = (product: VeyroProduct) => {
    const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
    fbq?.("track", "Contact", {
      content_name: product.name,
      content_ids: [`veyro-${product.id}`],
      value: product.price,
      currency: "AOA",
    });
  };

  const contactUrl = buildVeyroContactUrl();

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <header className={`veyro-header fixed inset-x-0 top-0 z-40 ${scrolled ? "is-scrolled" : ""}`}>
        <div className="relative mx-auto flex h-[4.5rem] max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-12">
          <a href="#colecao" className="veyro-header-link hidden text-[10px] uppercase sm:block">A coleção</a>
          <Button
            variant="ghost"
            size="icon"
            className="veyro-menu-button -ml-3 sm:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
          <a href="#top" className="veyro-logo-link absolute left-1/2 -translate-x-1/2" aria-label="VEYRO — início">
            <img src={logoAsset.url} alt="VEYRO" width={150} height={50} />
          </a>
          <a href="#colecao" className="veyro-header-link ml-auto text-[10px] uppercase">Pedir agora</a>
        </div>
        {menuOpen && (
          <nav className="veyro-mobile-menu sm:hidden" aria-label="Menu principal">
            <a href="#colecao" onClick={() => setMenuOpen(false)}>A coleção <ArrowUpRight /></a>
            <a href="#manifesto" onClick={() => setMenuOpen(false)}>A VEYRO <ArrowUpRight /></a>
            <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto <ArrowUpRight /></a>
          </nav>
        )}
      </header>

      <main>
        <section className="veyro-hero relative flex min-h-[690px] items-end overflow-hidden bg-foreground sm:min-h-[760px] lg:min-h-[min(880px,100svh)]">
          <img src={heroImage} alt="Modelo com óculos escuros numa composição editorial VEYRO" width={1600} height={1104} fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover object-[61%_center]" />
          <div className="veyro-hero-shade absolute inset-0" aria-hidden="true" />
          <div className="relative z-10 mx-auto grid w-full max-w-[90rem] grid-cols-4 items-end gap-6 px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:grid-cols-12 lg:px-12 lg:pb-24">
            <div className="col-span-4 max-w-[42rem] lg:col-span-8 lg:max-w-none">
              <p className="veyro-kicker veyro-hero-copy-soft">VEYRO · LUANDA</p>
              <h1 className="veyro-display veyro-hero-copy mt-5 max-w-3xl"><span>O estilo certo</span><span>não faz barulho.</span></h1>
              <a href="#colecao" className="veyro-button veyro-button-light mt-8 inline-flex min-h-12 items-center justify-center gap-6 px-6 text-[10px] uppercase sm:mt-10">
                Explorar coleção <ArrowDown className="h-4 w-4" />
              </a>
            </div>
            <p className="veyro-hero-copy-soft col-span-4 hidden justify-self-end pb-1 text-right text-[10px] uppercase lg:block">Essenciais para<br />todos os dias</p>
          </div>
          <span className="veyro-hero-copy-soft absolute bottom-7 right-5 z-10 text-[9px] sm:right-8 lg:right-12">01 / 03</span>
        </section>

        <section id="colecao" className="veyro-collection scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-[90rem]">
            <div className="veyro-collection-heading mb-10 flex items-end justify-between gap-5 sm:mb-14">
              <div>
                <p className="veyro-kicker text-muted-foreground">The Edit · VEYRO</p>
                <h2 className="veyro-section-title mt-3">A Coleção</h2>
              </div>
              <span className="hidden pb-1 text-[10px] uppercase text-muted-foreground sm:block">01 — 03</span>
            </div>

            <div className="grid grid-cols-1 gap-x-7 gap-y-12 lg:grid-cols-3 lg:gap-x-8">
              {VEYRO_PRODUCTS.map((product) => (
                <article key={product.id} className="veyro-product group min-w-0">
                  <div className="veyro-product-image relative aspect-[4/5] overflow-hidden bg-muted">
                    <img src={productImages[product.id]} alt={product.alt} width={1024} height={1280} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" />
                  </div>
                  <div className="mt-5 flex min-w-0 items-baseline justify-between gap-3">
                    <div className="min-w-0">
                      <p className="veyro-kicker text-muted-foreground">{product.category}</p>
                      <h3 className="veyro-product-title mt-2">{product.name}</h3>
                    </div>
                    <div className="shrink-0 text-right">
                      <s className="block text-[10px] text-muted-foreground">{formatVeyroPrice(product.referencePrice)}</s>
                      <span className="mt-1 block text-sm font-medium">{formatVeyroPrice(product.price)}</span>
                    </div>
                  </div>
                  <p className="mt-4 max-w-prose text-xs font-light leading-6 text-muted-foreground sm:text-sm">{product.description}</p>
                  <Button asChild className="veyro-order-button mt-6 min-h-12 w-full rounded-none bg-foreground px-5 text-[10px] font-normal uppercase text-background hover:bg-foreground/90">
                    <a href={buildVeyroOrderUrl(product)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick(product)}>
                      Encomendar via WhatsApp <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </article>
              ))}
            </div>
            <p className="mt-6 text-[9px] font-light text-muted-foreground">Imagens ilustrativas.</p>

            <section className="veyro-kit-offer mt-16 grid gap-8 px-6 py-9 sm:mt-24 sm:grid-cols-12 sm:items-end sm:px-10 sm:py-12 lg:px-14 lg:py-14" aria-labelledby="veyro-kit-title">
              <div className="sm:col-span-8">
                <p className="veyro-kicker text-background/60">Clube VEYRO · Founders Edition</p>
                <h3 id="veyro-kit-title" className="veyro-kit-title mt-4">{VEYRO_KIT.name}</h3>
                <p className="mt-5 max-w-2xl text-sm font-light leading-7 text-background/75">{VEYRO_KIT.description}</p>
              </div>
              <div className="sm:col-span-4 sm:justify-self-end sm:text-right">
                <s className="block text-xs text-background/55">{formatVeyroPrice(VEYRO_KIT.referencePrice)}</s>
                <p className="mt-2 text-2xl font-light">{formatVeyroPrice(VEYRO_KIT.price)}</p>
                <Button asChild className="mt-6 min-h-12 w-full rounded-none border border-background/60 bg-background px-5 text-[10px] font-normal uppercase text-foreground hover:bg-background/85 sm:min-w-64">
                  <a href={buildVeyroKitOrderUrl()} target="_blank" rel="noopener noreferrer">
                    Garantir o Meu Kit via WhatsApp <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </section>
          </div>
        </section>

        <section id="manifesto" className="veyro-manifesto scroll-mt-20 border-y border-border px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="mx-auto grid max-w-[90rem] grid-cols-4 gap-8 lg:grid-cols-12 lg:gap-6">
            <p className="veyro-kicker col-span-4 text-muted-foreground lg:col-span-3">A VEYRO · 01</p>
            <div className="col-span-4 lg:col-span-7 lg:col-start-5">
              <h2 className="veyro-manifesto-title">Presença sem excesso.<br /><em>Detalhe com intenção.</em></h2>
              <p className="mt-7 max-w-md text-sm font-light leading-7 text-muted-foreground sm:text-base">Uma seleção de acessórios para acompanhar o teu próprio ritmo.</p>
            </div>
          </div>
        </section>

        <section className="veyro-proof px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto flex max-w-[90rem] flex-col items-start gap-6 border-b border-border pb-14 sm:flex-row sm:items-center sm:justify-between sm:pb-16">
            <div className="flex items-start gap-4">
              <span className="veyro-proof-mark mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border" aria-hidden="true"><Users className="h-4 w-4" /></span>
              <div>
                <p className="veyro-proof-title">Mais de 15 membros</p>
                <p className="mt-2 text-xs font-light text-muted-foreground">já entraram no Clube VEYRO</p>
              </div>
            </div>
            <span className="text-[9px] uppercase text-muted-foreground">Luanda, Angola</span>
          </div>
        </section>
      </main>

      <footer id="contacto" className="veyro-footer px-5 pb-8 pt-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <a href="#top" className="veyro-logo-link veyro-logo-footer" aria-label="VEYRO — voltar ao início">
              <img src={logoAsset.url} alt="VEYRO" width={150} height={50} />
            </a>
            <p className="mt-3 text-[9px] uppercase text-muted-foreground">Luanda, Angola</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[9px] uppercase">
            <a href={contactUrl} target="_blank" rel="noopener noreferrer" className="veyro-footer-link inline-flex items-center gap-2"><MessageCircle className="h-3.5 w-3.5" /> WhatsApp</a>
            <span className="text-muted-foreground">Instagram</span>
            <span className="text-muted-foreground">TikTok</span>
            <span className="w-full text-[8px] text-muted-foreground sm:ml-3 sm:w-auto">© VEYRO {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>

    </div>
  );
}