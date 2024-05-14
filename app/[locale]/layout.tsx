import type { Metadata } from "next";
import Script from "next/script";
import { useTranslations } from "next-intl";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QuestionsSection from "../components/QuestionsSection";

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
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <body className={poppins.className + " bg-grayss-50"}>
        <Script src="/js/script.js"></Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar locale={locale} />

          <main className="max-w-6xl mx-auto px-4 py-5 mt-20 mb-0">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
