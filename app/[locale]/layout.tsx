import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LandingPage from "./LandingPage";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
// const poppins = Poppins({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TibaLab",
  description: "TibaLab Medical Laboratories",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const t = useTranslations("Index");

  return (
    <html lang={locale} dir={locale == "ar" ? "rtl" : "ltr"}>
      <body className={poppins.className + " bg-grayss-50"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar locale={locale}  />

          <LandingPage children={children} />
          
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
