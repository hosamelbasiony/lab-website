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
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

export default async function Branches() {
  const locale = useLocale();
  const data: simpleBlogCard[] = await getData(locale);
  // const t = useTranslations("Index");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-12">
      {data.map((post, idx) => (
        <Card className="shadow-md rounded-3xl border-0" key={idx}>
          <CardHeader>
            <CardTitle className="text-center text-xl text-gray-600 m-2">
              {post.title}
            </CardTitle>
            <CardDescription className="text-lg text-center my-2">
              <span className="flex flex-row">
                <MapPinIcon className="h-6 w-10 text-red-500 justify-start" />
                <span className="text-sm text-gray-600 leading-6 line-clamp-1 text-right">
                  {/* Prince Muhammad Bin Abdulaziz Rd As Sulimaniyah, Riyadh */}
                  {post.description}
                </span>
              </span>
              <div>
                <span className="text-sm text-gray-600 leading-6">294 KM</span>
              </div>
              <div>
                <Button asChild className="mt-6">
                  <Link href="/">
                    {locale=="ar"? "مزيد من المعلومات" : "Book now"} <ArrowLongRightIcon className="h-6 w-12" />
                  </Link>
                </Button>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      ))}
    </div>
  );
}
