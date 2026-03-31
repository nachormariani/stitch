import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    id: "01 / Inicio",
    title: "Relevamos tu operación",
    description:
      "Vemos cómo trabajás hoy y qué necesitás ordenar primero.",
  },
  {
    id: "02 / Orden",
    title: "Ordenamos el flujo",
    description:
      "Dejamos ventas, stock, compras y operación conectados en un mismo flujo.",
  },
  {
    id: "03 / Equipo",
    title: "Capacitamos al equipo",
    description:
      "La puesta en marcha es simple y sin cambiar tu forma de trabajar de golpe.",
  },
  {
    id: "04 / Operación",
    title: "Empezás a operar",
    description:
      "Ganás claridad diaria para controlar mejor el negocio desde el primer uso.",
  },
];

export function Process() {
  return (
    <section id="implementacion" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          centered
          eyebrow="Implementación"
          title="Proceso simple."
          description="Acompañamiento liviano, adaptado a tu operación y sin frenar el día a día."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.id}
              className="rounded-3xl border border-line bg-white p-8 shadow-soft"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                {step.id}
              </p>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em]">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-500">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
