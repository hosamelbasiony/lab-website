import { useLocale, useTranslations } from "next-intl";
import { client } from "@/app/lib/sanity";
import { simpleBlogCard } from "@/app/lib/interface";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Link from "next/link";

export const revalidate = 60; // revalidate at most every minute

const getData = async (locale: string) => {
  const query = `
  *[_type == 'branch' && locale == '${locale}' && labid == '${process.env.LAB_ID}' ]{
    title,
      "currentSlug": slug.current,
        description,
          mainImage,
            createdAt
  }`;

  const data = await client.fetch(query);

  return data;
};

export default async function Services() {
  const locale = useLocale();
  const data: simpleBlogCard[] = await getData(locale);
  // const t = useTranslations("Index");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-12">
      <Link
        href={locale + "/results/patients"}
        className="border-0 flex flex-col justify-between items-center p-4 pt-6 shadow-xl bg-blue-100 dark:bg-blue-900 dark:shadow-blue-600 dark:shadow-lg rounded-lg"
      >
        <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">
          {locale == "ar" ? "نتائج الأفراد" : "Individuals Results"}
        </span>
        <Avatar className="mt-4" style={{ height: "7.5rem", width: "7.5rem" }}>
          <AvatarImage src="/icons/patient.png" alt="@shadcn" />
          <AvatarFallback>TQM</AvatarFallback>
        </Avatar>
      </Link>

      <Link
        href="https://tibalab.yaseer-lis.net/lab-portal"
        className="border-0 flex flex-col justify-between items-center p-4 pt-6 shadow-xl bg-blue-100 dark:bg-blue-900 dark:shadow-blue-600 dark:shadow-lg rounded-lg"
      >
        <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">
          {locale == "ar" ? "بوابة نتائج التعاقدات" : "Contracts Result Portal"}
        </span>
        <Avatar className="mt-4" style={{ height: "7.5rem", width: "7.5rem" }}>
          <AvatarImage src="/icons/company.png" alt="@shadcn" />
          <AvatarFallback>TQM</AvatarFallback>
        </Avatar>
      </Link>

      <Link
        href="https://tibalab.yaseer-lis.net/doctors/#/login"
        className="border-0 flex flex-col justify-between items-center p-4 pt-6 shadow-xl bg-blue-100 dark:bg-blue-900 dark:shadow-blue-600 dark:shadow-lg rounded-lg"
      >
        <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">
          {locale == "ar" ? "بوابة نتائج الأطباء" : "Physicians Result Portal"}
        </span>
        <Avatar className="mt-4" style={{ height: "7.5rem", width: "7.5rem" }}>
          <AvatarImage src="/icons/doc.png" alt="@shadcn" />
          <AvatarFallback>TQM</AvatarFallback>
        </Avatar>
      </Link>
    </div>
  );
}
