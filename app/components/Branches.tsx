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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import BranchesCarosel from "./BranchesCarosel";

export const revalidate = 60; // revalidate at most every minute

const getData = async (locale: string) => {
  const query = `
  *[_type == 'branch' && locale == '${locale}' && labid == '${process.env.LAB_ID}' ] | order(order asc) {
    title,
      "currentSlug": slug.current,
        description,
          mainImage,
            createdAt
  }`;

  const data = await client.fetch(query);

  return data;
};

export default async function Branches() {
  const locale = useLocale();
  const data: simpleBlogCard[] = await getData(locale);
  // const t = useTranslations("Index");

  return <BranchesCarosel branches={data} locale={locale} />;
}
