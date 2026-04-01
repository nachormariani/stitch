import type { ReactNode } from "react";
import { LayoutGroup } from "motion/react";
import { Container } from "@/components/container";
import { BoxIcon, CartIcon, DashboardIcon, SparkIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { TextRotate } from "@/components/ui/text-rotate";

type CardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

function ModuleCard({ title, description, icon }: CardProps) {
  return (
    <article className="min-h-[280px] rounded-[1.75rem] border border-black/10 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] sm:p-10">
      {icon}
      <h3 className="mt-8 max-w-sm text-[2rem] font-bold tracking-[-0.05em] text-foreground">
        {title}
      </h3>
      <p className="mt-5 max-w-md text-base leading-8 text-slate-500">
        {description}
      </p>
    </article>
  );
}

export function ModulesGrid() {
  return (
    <section id="modulos" className="bg-surfaceAlt/70 py-24 sm:py-32">
      <Container>
        <LayoutGroup>
          <SectionHeading
            centered
            eyebrow="Producto"
            title={
              <>
                Lo que necesitás para tener{" "}
                <TextRotate
                  texts={["control", "claridad", "certeza", "tranquilidad", "dirección", "tiempo"]}
                  rotationInterval={2500}
                  mainClassName="text-[#1B3A5C] inline-flex"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                />
              </>
            }
            description="Cada bloque te da más claridad y menos trabajo manual."
          />
        </LayoutGroup>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <ModuleCard
            description="Ventas, stock, compras y caja en un solo lugar."
            icon={<DashboardIcon variant="solid" />}
            title="Todo tu negocio, visible"
          />

          <ModuleCard
            description="Controlás stock y compras sin depender de planillas."
            icon={<BoxIcon variant="solid" />}
            title="Sabés exactamente qué tenés"
          />

          <ModuleCard
            description="Ventas y operación conectadas, sin pasar datos dos veces."
            icon={<CartIcon variant="solid" />}
            title="Vendé sin duplicar trabajo"
          />

          <ModuleCard
            description="Tenés datos claros para ver márgenes y desvíos."
            icon={<SparkIcon variant="solid" />}
            title="Tomás decisiones con números reales"
          />
        </div>
      </Container>
    </section>
  );
}
