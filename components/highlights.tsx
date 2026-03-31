import { Container } from "@/components/container";
import { EyeIcon, NodeIcon, SparkIcon } from "@/components/icons";

const items = [
  {
    title: "Ventas, stock y compras desconectados",
    description:
      "Perdés tiempo cruzando información y operás sin visión completa.",
    icon: <NodeIcon />,
  },
  {
    title: "No sabés realmente cuánto ganás",
    description:
      "Sin datos claros, es difícil entender márgenes y rentabilidad.",
    icon: <EyeIcon />,
  },
  {
    title: "Demasiado trabajo manual",
    description:
      "Cargás lo mismo dos veces y dependés de planillas.",
    icon: <SparkIcon />,
  },
];

export function Highlights() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl bg-surfaceAlt/65 p-8 transition hover:bg-surface hover:shadow-soft"
            >
              {item.icon}
              <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em]">
                {item.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
