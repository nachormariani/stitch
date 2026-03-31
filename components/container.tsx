import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <div className="section-shell">{children}</div>;
}
