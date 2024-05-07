import { useTranslations } from "next-intl";
import React from "react";

export default function QuestionsSection() {
  const t = useTranslations("Index");

  return (
    <section className="w-full bg-blue-700 text-white py-8 px-6 mb-12">
      <div className="max-w-6xl mx-auto" style={{ height: "auto" }}>
        <div className="flex flex-col lg:flex-row justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-6">{t("questions")}</h2>

            <p className="sec-desc">{t("questionsMore")}</p>
          </div>
          <a href="/" className="border rounded-xl h-10 py-2 px-4 mt-8 lg:mt-0">
            {t("contactUs")} <span className="ml-2">⟶</span>
          </a>
        </div>
      </div>
    </section>
  );
}
