import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "./ReactQueryProvider";
import Favicon from "/public/favicon.ico";
import { Albert_Sans } from "next/font/google";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
});

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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={albertSans.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
