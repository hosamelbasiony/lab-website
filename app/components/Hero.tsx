import React from "react";
import Link from "next/link";
import { client } from "../lib/sanity";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import LazyYoutube from "./YoutubeVideo";
import VideoPage from "../components/VideoPage";
import Loadable from "next/dist/shared/lib/loadable.shared-runtime";

export const revalidate = 60; // revalidate at most every minute

const getData = async (locale: string) => {
  const query = `
      *[_type == 'hero' && locale == '${locale}' && labid == '${process.env.LAB_ID}']`;

  const list = await client.fetch(query);

  if (list.length) return list[0];
  return {};
};

export default async function Hero() {
  const t = useTranslations("Index");
  const locale = useLocale();
  const labData = await getData(locale);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 mb-2 gap-10">
      <div className="order-2">
        <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-200 mt-4 mb-6">
          {labData.title}
        </h1>
        <span className="line-clamp-none leading-7 text-gray-600 dark:text-gray-100">
          {/* {labData.info} */}
          {locale == "en" ? <EnglishInfo /> : <ArabicInfo />}
        </span>
        <Button asChild className="mt-6">
          <Link href="/" className="dark:text-gray-50">
            {t("readMore")} <ArrowLongRightIcon className="h-6 w-12" />
          </Link>
        </Button>
      </div>
      <div className="order-1 lg:order-3">
        {/* <img src={`/images/hero2.png`} alt="" /> */}

        {/* <LazyYoutube /> */}

        <VideoPage />
      </div>
    </div>
  );
}

const ArabicInfo = () => {
  return (
    <>
      <h1 className="text-md font-bold text-primary">الرؤية</h1>
      <h2 className="text-gray-800">
        تلتزم خدمة مختبرات طيبة بكونها المزود الرائد لخدمات المختبرات الطبية في
        مجتمعنا. نحن نركز على احتياجات عملائنا، ونقدم أحدث الاختبارات والخدمات
        الاستشارية المعتمدة بالكامل، والتطبيق المبتكر للعلوم والتكنولوجيا لتشخيص
        الأمراض البشرية وإدارتها.
      </h2>
      <h1 className="text-lg font-bold text-primary">مهمتنا</h1>
      <h2 className="text-gray-800">
        تتمثل مهمة مختبر طيبة في تقديم خدمات معملية عالية الجودة وفعالة من حيث
        التكلفة بطريقة تدعم مهمة رعاية المرضى لهيئة تسجيل الاعتماد الصحي
        (GAHAR). نحن نهدف إلى إعطاء الطبيب أفضل نصيحة ممكنة حول ما يجب فعله مع
        المريض.
      </h2>
    </>
  );
};

const EnglishInfo = () => {
  return (
    <>
      <h2 className="text-gray-800">
        <span className="text-md font-bold text-primary">Vision: </span>Tiba Laboratory Service commits to being the leading provider of medical
        laboratory services in our community. We focus on our customer’s needs,
        provide state-of-the-art fully accredited professional testing and
        consultative services,  the innovative application of science and
        technology to the diagnosis and management of human disease.
      </h2>
      <h2 className="text-gray-800">
      <span className="text-md font-bold text-primary">Our Mission: </span>The mission of Tiba laboratory is to provide high- quality,
        cost-effective lab services in a manner that supports the patient care
        mission of General Authority for Health Accreditation Registration
        (GAHAR). We aim giving the clinician the best possible advice about what
        to do with patient.
      </h2>
    </>
  );
};
