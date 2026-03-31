import { Container } from "@/components/container";
import ShimmerText from "@/components/ui/shimmer-text";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="overflow-hidden bg-hero-radial pb-16 pt-40 sm:pb-20 sm:pt-44">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-balance text-5xl font-extrabold leading-[0.94] tracking-[-0.06em] text-foreground sm:text-6xl lg:text-8xl">
            <ShimmerText className="inline-block">
              Centralizá tu operación en un solo lugar.
            </ShimmerText>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-500 sm:text-lg">
            Centralizá ventas, stock y compras para ordenar tu operación y
            decidir con información real.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href="#cta"
              className="w-full gap-2 sm:w-auto sm:min-w-[240px] sm:px-8 sm:py-4"
            >
              <span>Agendá una demo</span>
              <span aria-hidden="true" className="text-base leading-none">
                →
              </span>
            </Button>
            <Button
              href="#modulos"
              variant="secondary"
              className="w-full gap-2 sm:w-auto sm:min-w-[220px] sm:px-8 sm:py-4"
            >
              <span
                aria-hidden="true"
                className="text-xs leading-none text-slate-700"
              >
                ▷
              </span>
              <span>Ver cómo funciona</span>
            </Button>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500">
            Sin cambiar tu forma de trabajar. Implementación simple.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Pensado para restaurantes, bares, cafeterías y heladerías.
          </p>
        </div>
      </Container>
    </section>
  );
}
