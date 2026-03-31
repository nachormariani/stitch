import { Container } from "@/components/container";
import { Logo } from "@/components/logo";

const footerGroups = [
  {
    title: "Legal",
    items: ["Privacidad", "Términos"],
  },
  {
    title: "Compañía",
    items: ["Contacto", "LinkedIn"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line py-16">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-6 text-sm leading-6 text-slate-500">
              Software de gestión para restaurantes, bares, cafeterías y
              heladerías que buscan más claridad operativa.
            </p>
            <p className="mt-6 text-sm text-slate-400">
              © 2026 Unio. Todos los derechos reservados.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-foreground">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-500">
                  {group.items.map((item) => (
                    <li key={item}>
                      <a className="transition hover:text-foreground" href="#">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
