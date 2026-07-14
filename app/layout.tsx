import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Cima del Poder Personal",
  description:
    "Sesion de coaching sobre poder personal, autoestima y auto recompensa inspirada en el senderismo y los volcanes.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
