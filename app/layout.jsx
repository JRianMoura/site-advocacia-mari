import { Marcellus, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Transition from "@/components/Transition";
import PageTransition from "@/components/PageTransition";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Mariana Batistussi - Advogata",
  description: "Site da advogada mais gata do mundo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="h-screen">
      <body
        className={`${marcellus.variable} ${montserrat.variable} overflow-x-hidden`}
      >
        <Transition />
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
