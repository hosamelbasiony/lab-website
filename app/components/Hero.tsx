import React from "react";
import Link from "next/link";
import { client } from "../lib/sanity";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

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
    <div className="my-8 grid grid-cols-1 lg:grid-cols-2 mt-4 gap-10">
      <div className="order-2">
        <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-200 mt-4 mb-6">
          {labData.title}
        </h1>
        <span className="line-clamp-none leading-7 text-gray-600 dark:text-gray-100">
          {labData.info}
        </span>
        <Button asChild className="mt-6">
          <Link href="/" className="dark:text-gray-50">
            {t("readMore")} <ArrowLongRightIcon className="h-6 w-12" />
          </Link>
        </Button>
      </div>
      <div className="order-1 lg:order-3">
        {/* <img
            src="https://s3.eu-west-1.amazonaws.com/blazma.com/white-label/white-label-17053970767098-18.png"
            alt="Blazma"
          /> */}
        <img src={`/images/hero2.png`} alt="" />
      </div>
    </div>
  );
}
