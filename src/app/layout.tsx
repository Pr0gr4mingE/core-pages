import type { Metadata } from "next";
import "./globals.css"; // Garante que o Tailwind e os estilos base sejam carregados

export const metadata: Metadata = {
  title: "CorePages",
  description: "O seu construtor de páginas dinâmico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}