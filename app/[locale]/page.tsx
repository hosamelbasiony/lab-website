import { useTranslations } from "next-intl";
import Branches from "../components/Branches";
import Hero from "../components/Hero";
import Services from "../components/Services";
import QuestionsSection from "../components/QuestionsSection";
import Accreditation from "../components/Accreditation";
import Testimonials from "../components/Testimonials";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <div className="w-full">
      <Hero />

      <Accreditation />
      
      <Testimonials />

      <div className="mt-12 pt-8 mb-24 border-t-1 border-gray-100">
        <h1 className="text-center text-xl text-red-600 mb-8 font-bold">
          {t("chooseLocation")}
        </h1>
        <h1 className="text-center text-4xl font-bold text-gray-600 dark:text-gray-200">
          {t("ourBranches")}
        </h1>

        <Branches />
      
      </div>

      <div className="mt-24 mb-24">
        <Services />
      </div>

      <QuestionsSection />
    </div>
  );
}
