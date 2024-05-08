import { useTranslations } from "next-intl";
import Branches from "../components/Branches";
import Hero from "../components/Hero";
import Services from "../components/Services";

export default function Home() {
  const t = useTranslations('Index');

  return (
    <>
      
      <Hero />

      <div className="mt-36 mb-24">
        <Services />
      </div>

      <div className="mt-36 mb-24">
        <h1 className="text-center text-xl text-red-600 mb-2">{t('chooseLocation')}</h1>
        <h1 className="text-center text-4xl font-bold text-gray-600 dark:text-gray-200">{t('ourBranches')}</h1>
        <Branches />
      </div>

    </>
  );
}
