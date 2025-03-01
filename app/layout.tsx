import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beegum Shahijas - Sweet Roasted Rice Powders",
  description:
    "Authentic Kerala sweet roasted rice powders - A taste of tradition, a touch of health",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
