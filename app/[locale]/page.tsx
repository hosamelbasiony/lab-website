import { useTranslations } from "next-intl";
import Branches from "../components/Branches";
import Hero from "../components/Hero";
import Services from "../components/Services";
import QuestionsSection from "../components/QuestionsSection";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <div className="w-full">
      <Hero />

      <div className="mt-12 pt-8 mb-24 border-t-1 border-gray-100">
        <h1 className="text-center text-xl text-red-600 mb-2">
          {t("chooseLocation")}
        </h1>
        <h1 className="text-center text-4xl font-bold text-gray-600 dark:text-gray-200">
          {t("ourBranches")}
        </h1>

        <div className="p-4 pt-0 mt-0 mx-auto text-center0 border-0 flex flex-row justify-around">
          <Branches />
          {/* <div className="w-full w-6xl mx-auto pb-4 py-5">
        <h1>some text</h1>
      </div> */}
        </div>
      </div>

      <div className="mt-36 mb-24">
        <Services />
      </div>

      <QuestionsSection />
    </div>
  );
}
