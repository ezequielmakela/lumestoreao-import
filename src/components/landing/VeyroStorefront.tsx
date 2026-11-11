import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, MessageCircle, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  buildVeyroOrderUrl,
  formatVeyroPrice,
  VEYRO_PRICE,
  VEYRO_PRODUCTS,
  VEYRO_REFERENCE_PRICE,
  type VeyroProduct,
} from "@/lib/veyro";
import heroImage from "@/assets/veyro-hero.webp";
import glassesImage from "@/assets/veyro-glasses.webp";
import watchImage from "@/assets/veyro-watch.webp";
import braceletImage from "@/assets/veyro-bracelet.webp";

const productImages: Record<string, string> = {
  "oculos-transparente": glassesImage,
  "relogio-quadrado": watchImage,
  pulseira: braceletImage,
};

export function VeyroStorefront() {
  const [selectedProduct, setSelectedProduct] = useState<VeyroProduct | null>(null);
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
      value: VEYRO_PRICE,
      currency: "AOA",
    });
  };

  const contactUrl = "https://wa.me/244952355696?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20VEYRO.";

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
          <a href="#top" className="veyro-wordmark absolute left-1/2 -translate-x-1/2" aria-label="VEYRO — início">VEYRO</a>
          <a href="#colecao" className="veyro-header-link ml-auto text-[10px] uppercase">Descobrir</a>
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
            <div className="col-span-4 max-w-[42rem] lg:col-span-8">
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
                <p className="veyro-kicker text-muted-foreground">A seleção VEYRO</p>
                <h2 className="veyro-section-title mt-3">Menos, mas melhor.</h2>
              </div>
              <span className="hidden pb-1 text-[10px] uppercase text-muted-foreground sm:block">01 — 03</span>
            </div>

            <div className="grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-5 lg:grid-cols-3 lg:gap-x-7">
              {VEYRO_PRODUCTS.map((product, index) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className={`veyro-product group min-w-0 text-left ${index === 2 ? "col-span-2 lg:col-span-1" : ""}`}
                  aria-label={`Ver ${product.name}`}
                >
                  <span className={`veyro-product-image relative block overflow-hidden bg-muted ${index === 2 ? "mx-auto aspect-square w-[min(100%,22rem)] sm:w-full sm:aspect-[0.95]" : "aspect-[0.91] sm:aspect-[0.95]"}`}>
                    <img src={productImages[product.id]} alt={product.alt} width={1024} height={1024} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]" />
                    <span className="veyro-quick-view absolute bottom-3 right-3 hidden h-10 w-10 items-center justify-center rounded-full bg-background text-foreground sm:flex" aria-hidden="true"><ArrowUpRight className="h-4 w-4" /></span>
                  </span>
                  <span className="mt-4 flex items-baseline justify-between gap-2 sm:mt-5">
                    <span className="min-w-0">
                      <span className="block text-[9px] uppercase text-muted-foreground">{product.category}</span>
                      <span className="mt-1 block truncate text-[12px] font-light sm:text-sm">{product.name}</span>
                    </span>
                    <span className="shrink-0 text-right">
                      <span className="block text-[9px] text-muted-foreground line-through">{formatVeyroPrice(VEYRO_REFERENCE_PRICE)}</span>
                      <span className="mt-1 block text-[11px] font-medium sm:text-xs">{formatVeyroPrice(VEYRO_PRICE)}</span>
                    </span>
                  </span>
                  <span className="mt-3 block h-px w-full origin-left scale-x-0 bg-foreground transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                </button>
              ))}
            </div>
            <p className="mt-6 text-[9px] font-light text-muted-foreground">Imagens ilustrativas.</p>
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
            <a href="#top" className="veyro-wordmark text-xl" aria-label="VEYRO — voltar ao início">VEYRO</a>
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

      <Dialog open={selectedProduct !== null} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        {selectedProduct && (
          <DialogContent className="veyro-product-dialog grid h-[100dvh] w-screen max-w-none translate-x-[-50%] translate-y-[-50%] grid-cols-1 gap-0 overflow-hidden rounded-none border-0 bg-background p-0 sm:h-[88dvh] sm:w-[92vw] sm:max-w-6xl sm:grid-cols-2">
            <div className="veyro-dialog-image relative min-h-0 bg-muted">
              <img src={productImages[selectedProduct.id]} alt={selectedProduct.alt} width={1024} height={1024} className="h-full w-full object-cover" />
              <span className="absolute bottom-5 left-5 text-[9px] uppercase text-foreground/60">VEYRO · {selectedProduct.category}</span>
            </div>
            <div className="veyro-dialog-details flex min-h-0 flex-col overflow-y-auto px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-7 sm:px-9 sm:pb-9 sm:pt-12 lg:px-14">
              <div className="flex items-center justify-between">
                <p className="veyro-kicker text-muted-foreground">A seleção VEYRO</p>
                <Button variant="ghost" size="icon" className="-mr-3 -mt-2" onClick={() => setSelectedProduct(null)} aria-label="Fechar ficha do produto"><X /></Button>
              </div>
              <DialogTitle className="veyro-dialog-title mt-5">{selectedProduct.name}</DialogTitle>
              <DialogDescription className="sr-only">Ficha de {selectedProduct.name} VEYRO, com pagamento na entrega.</DialogDescription>
              <div className="mt-5 flex items-baseline gap-3">
                <span className="text-sm">{formatVeyroPrice(VEYRO_PRICE)}</span>
                <span className="text-xs text-muted-foreground line-through">{formatVeyroPrice(VEYRO_REFERENCE_PRICE)}</span>
              </div>
              {selectedProduct.option && (
                <fieldset className="mt-8 border-t border-border pt-6">
                  <legend className="text-[9px] uppercase text-muted-foreground">{selectedProduct.option.label}</legend>
                  <span className="mt-3 inline-flex min-h-10 items-center border border-foreground px-4 text-[10px]">{selectedProduct.option.value}</span>
                </fieldset>
              )}
              <div className="mt-8 border-t border-border pt-5 text-xs font-light text-muted-foreground">
                <p>Pagamento na entrega</p>
                <p className="mt-2">Confirma o teu pedido diretamente connosco.</p>
              </div>
              <div className="veyro-dialog-action mt-auto pt-8">
                <Button asChild className="veyro-whatsapp-cta min-h-12 w-full rounded-full bg-foreground text-[10px] font-normal uppercase text-background hover:bg-foreground/90">
                  <a href={buildVeyroOrderUrl(selectedProduct)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick(selectedProduct)}>
                    Comprar via WhatsApp <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <p className="mt-3 text-center text-[9px] font-light text-muted-foreground">Sem pagamento antecipado.</p>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}