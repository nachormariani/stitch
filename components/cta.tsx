import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section id="cta" className="py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-center shadow-soft sm:px-10 sm:py-24">
          <div className="absolute inset-0 bg-panel-glow" />
          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Demo
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
              Pedí una demo de 20 minutos.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              En 20 minutos vas a ver si aplica a tu negocio. Te mostramos
              cómo ordenar tu operación sin sumar complejidad.
            </p>
            <div className="mt-10">
              <Button
                href="mailto:hola@unio.app"
                variant="secondary"
                className="border-white/15 bg-white text-primary hover:bg-slate-100"
              >
                Agendá una demo
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
