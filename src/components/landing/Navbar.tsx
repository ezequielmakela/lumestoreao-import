import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.svg";

const links = [
  { label: "Produto", href: "#produto" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Antes & Depois", href: "#antes-depois" },
  { label: "FAQ", href: "#faq" },
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
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled ? "border-border bg-background/95 backdrop-blur-md" : "border-transparent bg-background/75 backdrop-blur-sm",
      )}
    >
      <nav className="container-tight grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 md:h-20">
        <a href="#top" className="flex min-w-0 items-center text-foreground" aria-label="Lume Store — início">
          <img src={logo} alt="Lume Store" className="h-9 w-auto md:h-11" />
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link text-sm font-semibold text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-3">
          <Button
            onClick={onBuyClick}
            className="h-11 rounded-sm bg-foreground px-4 font-display text-xs font-bold uppercase text-background shadow-none hover:bg-primary hover:text-primary-foreground md:px-6"
          >
            Pedir agora
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11 rounded-sm text-foreground lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="container-tight py-4 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-3 min-h-11 font-semibold text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
            <Button onClick={onBuyClick} className="cta-primary w-full" size="lg">
              Pedir agora — 9.000 Kz
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};
