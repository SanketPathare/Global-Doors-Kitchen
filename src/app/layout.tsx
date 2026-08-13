import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Global Doors & Kitchen | Premium Doors & Custom Kitchens",
  description:
    "Modern warm-luxury doors and custom kitchen craftsmanship. Premium materials, bespoke design, and expert installation by Global Doors & Kitchen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${outfit.variable} ${inter.className} font-body antialiased bg-cream text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
