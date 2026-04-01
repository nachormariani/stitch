import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  centered?: boolean;
  containerClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  containerClassName,
}: SectionHeadingProps) {
  const defaultWidth = containerClassName ?? "max-w-3xl";
  return (
    <div className={centered ? `mx-auto ${defaultWidth} text-center` : defaultWidth}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
