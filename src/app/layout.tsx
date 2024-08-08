import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "./ReactQueryProvider";
import Favicon from "/public/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zamrood by Pandooin",
  description:
    "Experience the finest that Indonesia has to offer with our curated selection of premium trips, ensuring comfort every step of the way",
  icons: [{ rel: "icon", url: Favicon.src }],
  openGraph: {
    title: "Zamrood by Pandooin",
    description:
      "Experience the finest that Indonesia has to offer with our curated selection of premium trips, ensuring comfort every step of the way",
    url: "https://google.com",
    siteName: "Zamrood by Pandooin",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Zamrood by Pandooin",
    description:
      "Experience the finest that Indonesia has to offer with our curated selection of premium trips, ensuring comfort every step of the way",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
