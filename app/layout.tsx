import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "XPMarketing - Marketing externalise pour PME",
  description:
    "XPMarketing accompagne les PME avec un marketing externalise concret, structure et oriente resultats.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}