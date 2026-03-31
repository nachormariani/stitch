import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";

const navItems = [
  { label: "Producto", href: "#producto" },
  { label: "Módulos", href: "#modulos" },
  { label: "Implementación", href: "#implementacion" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-background/70 backdrop-blur-xl">
      <Container>
        <nav className="flex h-20 items-center justify-between gap-6">
          <Logo />
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                className="text-sm font-medium text-slate-500 transition hover:text-foreground"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
          <Button href="#cta" className="px-5 py-2.5 text-[13px]">
            Agendá una demo
          </Button>
        </nav>
      </Container>
    </header>
  );
}
