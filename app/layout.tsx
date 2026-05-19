import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import "./globals.css";

const htmlSourcePath = path.join(
  process.cwd(),
  "public",
  "pagf_landing_page_v4_shareable.html",
);
const htmlSource = fs.existsSync(htmlSourcePath)
  ? fs.readFileSync(htmlSourcePath, "utf8")
  : "";
const faviconHref =
  htmlSource.match(/<link\s+rel="icon"[^>]*href="([^"]+)"/i)?.[1] ?? undefined;

export const metadata: Metadata = {
  title: "PAGF — The Pan African Girls Fund",
  description:
    "The Pan African Girls Fund is an Umbrella Fund that resources girls' and young feminists' dreams, imaginations, and freedoms.",
  openGraph: {
    title: "The Pan-African Girls Fund",
    description:
      "Resourcing the dreams and imaginations of African girls and young women.",
    url: "https://www.thepanafricangirlsfund.com",
  },
  ...(faviconHref ? { icons: { icon: faviconHref } } : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="no-js">{children}</body>
    </html>
  );
}
