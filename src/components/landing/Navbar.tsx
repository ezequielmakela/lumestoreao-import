import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.svg";

const links = [
  { label: "Produto", href: "#produto" },
  { label: "Como Funciona", href: "#como-funciona" },
];

export const Navbar = ({ onBuyClick }: { onBuyClick?: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur shadow-soft" : "bg-transparent",
      )}
    >
      <nav className="container-tight flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2 text-foreground">
          <img src={logo} alt="Lume Store" className="h-10 md:h-12 w-auto" />
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm transition-colors font-bold text-primary"

              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-3">
          <Button
            onClick={onBuyClick}
            className="hidden sm:inline-flex rounded-xl bg-primary hover:bg-[hsl(var(--primary-glow))] text-primary-foreground font-display font-bold shadow-elegant"
            size="lg"
          >
            Comprar Agora
          </Button>
          <button
            className="md:hidden h-10 w-10 grid place-items-center text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t shadow-soft">
          <ul className="container-tight py-4 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-2 font-semibold text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
            <Button onClick={onBuyClick} className="bg-primary hover:bg-[hsl(var(--primary-glow))] w-full font-display font-bold" size="lg">
              Comprar Agora
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};
