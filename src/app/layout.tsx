// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils"; // Asegúrate de que la función `cn` esté definida correctamente
import "./globals.css";

// Fuentes locales
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Fuentes de Google
const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Wps-Simulator",
  description: "Wps Simulator based on Multi-Agents",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased", // Agrega la clase antialiased para un mejor renderizado de fuentes
          geistSans.variable, // Fuentes locales
          geistMono.variable, // Fuentes locales
          fontHeading.variable, // Fuente de Google para títulos
          fontBody.variable // Fuente de Google para el cuerpo de texto
        )}
      >
        {children}
      </body>
    </html>
  );
}
