import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";
import logo from "@/assets/logo.svg";

const links = [
  { label: "Produto", href: "#produto" },
  { label: "Clientes", href: "#clientes" },
];

export const Navbar = ({ onBuyClick }: { onBuyClick?: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle, mounted } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200",
        scrolled ? "border-border bg-background/95 backdrop-blur" : "border-transparent bg-background/90 backdrop-blur",
      )}
    >
      <nav className="container-tight grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 md:h-20">
        <a href="#" className="flex min-w-0 items-center text-foreground">
          <img src={logo} alt="Lume Store" className="h-9 w-auto md:h-11" />
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-bold text-primary hover:opacity-80 transition-opacity">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-3">
          <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
            className="h-11 w-11 rounded-md text-foreground"
          >
            {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            onClick={onBuyClick}
            className="h-11 rounded-md bg-primary px-4 font-display text-sm font-bold text-primary-foreground shadow-none hover:bg-primary/90 md:px-6 md:text-base"
          >
            Comprar
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11 rounded-md text-foreground md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="container-tight py-4 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-3 min-h-11 font-semibold text-foreground">
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
