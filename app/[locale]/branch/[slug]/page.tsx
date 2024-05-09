// import { useRouter } from "next/navigation"
import React from "react";
import { client } from "@/app/lib/sanity";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/16/solid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLocale } from "next-intl";
import Image from "next/image";

const getData = async (slug: string) => {
  const query = `
  *[_type == 'branch' && slug.current == '${slug}']`;

  const data = await client.fetch(query);

  return data[0];
};

interface pageParams {
  params: any;
};

export default async function BranchPage({ params }: pageParams ) {
  const data: any = await getData(params.slug);
  const locale = useLocale();

  return (
  <>
    {/* <p>{ params.slug }</p>
    <div>{ data.title }</div>
    <div>{ data.description }</div> */}

    <div className="my-24 grid grid-cols-1 lg:grid-cols-2 mt-4 gap-10">
      <div className="order-2">
        <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-200 mt-4 mb-6">
          {data.title}
        </h1>
        <span className="line-clamp-none leading-7 text-gray-600 dark:text-gray-100">
          {data.description}
        </span>
        <Button asChild className="mt-6">
          <Link href="/" className="dark:text-gray-50">
          {locale=="en"?"Back":"عودة"} <ArrowLongLeftIcon className="h-6 w-12" />
          </Link>
        </Button>
      </div>
      <div className="order-1 lg:order-3">
        <Image height={750} width={750} src={`/images/hero2.png`} alt="" />
      </div>
    </div>
    
  </>

);
}
