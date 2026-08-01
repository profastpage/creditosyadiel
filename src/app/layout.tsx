import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionPreloader from "@/components/SessionPreloader";
import BottomNav from "@/components/BottomNav";
import GoldProgressBar from "@/components/GoldProgressBar";
import GlowingParticles from "@/components/GlowingParticles";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0F14",
};

export const metadata: Metadata = {
  title: {
    default: "CRÉDITOS YADIEL — Préstamos Personales al Instante y Garantía Vehicular en Perú",
    template: "%s | CRÉDITOS YADIEL",
  },
  description:
    "CRÉDITOS YADIEL — Préstamos personales al instante desde S/1,000 hasta S/50,000 y préstamos con garantía vehicular sin dejar de usar tu auto. Desembolso en 24 horas. RUC: 20611453281. Tu aliado financiero de confianza en Perú.",
  keywords: [
    "préstamos personales Perú",
    "préstamo personal al instante",
    "préstamo con garantía vehicular",
    "crédito rápido Perú",
    "préstamo sin dejar auto",
    "desembolso en 24 horas",
    "financiera Perú",
    "CRÉDITOS YADIEL",
    "crédito al instante",
    "dinero rápido Lima",
    "préstamos online Perú",
    "RUC 20611453281",
  ],
  authors: [{ name: "CRÉDITOS YADIEL" }],
  creator: "CRÉDITOS YADIEL",
  publisher: "CRÉDITOS YADIEL",
  metadataBase: new URL("https://creditosyadiel.vercel.app"),
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "32x32" },
      { url: "/favicon-32x32.png?v=2", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=2", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=2", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-icon.png?v=2",
    shortcut: "/favicon.ico?v=2",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CRÉDITOS YADIEL — Préstamos Personales al Instante | Desembolso en 24h",
    description:
      "Obtén tu préstamo personal al instante desde S/1,000 hasta S/50,000. También préstamos con garantía vehicular sin dejar de usar tu auto. Desembolso en 24 horas. CRÉDITOS YADIEL — RUC: 20611453281.",
    url: "https://creditosyadiel.vercel.app",
    siteName: "CRÉDITOS YADIEL",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/og-image.webp?v=3",
        width: 1200,
        height: 630,
        alt: "CRÉDITOS YADIEL — Préstamos Personales al Instante y Garantía Vehicular en Perú",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRÉDITOS YADIEL — Préstamos Personales al Instante | Desembolso en 24h",
    description:
      "Obtén tu préstamo personal desde S/1,000 hasta S/50,000. Garantía vehicular sin dejar tu auto. Desembolso en 24 horas. CRÉDITOS YADIEL.",
    images: [
      {
        url: "/og-image.webp?v=3",
        alt: "CRÉDITOS YADIEL — Préstamos Personales al Instante y Garantía Vehicular",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    maxImagePreview: "large",
    maxSnippet: -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <SessionPreloader>
          <div className="relative flex min-h-screen flex-col">{children}</div>
          {/* Bottom Navigation Mobile — aparece en todas las páginas, solo <1024px */}
          <GoldProgressBar />
          <GlowingParticles />
          <BottomNav />
        </SessionPreloader>
      </body>
    </html>
  );
}
