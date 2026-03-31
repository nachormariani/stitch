import type { ReactNode } from "react";
import type { Metadata } from "next";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unio | Gestión Gastronómica",
  description:
    "Unio centraliza ventas, stock y finanzas para negocios gastronómicos con una experiencia moderna, clara y escalable.",
  icons: {
    icon: "/unio-logo-dark.png",
    shortcut: "/unio-logo-dark.png",
    apple: "/unio-logo-dark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
