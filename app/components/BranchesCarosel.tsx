"use client";

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

import { Button } from "@/components/ui/button";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type PageProps = {
  branches: any[];
  locale: string;
};

export default function BranchesCarosel({branches, locale}: PageProps) {
  return (

      <Carousel
        className="w-4/5 lg:w-6xl mx-auto py-0 pt-12"
        orientation="horizontal"
        style={{ direction: "ltr" }}
      >
        <CarouselContent>
          {/* {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-6xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))} */}

          {branches.map((post, index) => (
            <CarouselItem key={index}>
              <Card
                className="shadow-xl rounded-lg border-0 bg-blue-100 dark:bg-blue-900 dark:shadow-blue-600 dark:shadow-lg m-0"
                key={index}
              >
                <CardHeader>
                  <CardTitle className="text-center text-xl text-gray-600 dark:text-gray-200 m-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-center my-2">
                    <span className="flex flex-row">
                      <span className="w-full text-sm text-gray-600 dark:text-gray-200 leading-6 line-clamp-1 text-center flex flex-row space-around">
                        {/* <MapPinIcon className="h-6 w-10 text-red-500 dark:text-red-400 justify-start" /> */}
                        <span className="line-clamp-1 whitespace-nowrap text-center w-full">
                          <span className="text-xl mx-2">📌</span>
                          {post.description}
                        </span>
                      </span>
                    </span>
                    <div>
                      <Button asChild className="mt-6 dark:text-gray-50">
                        {/* <Link href="/"> */}
                        <Link href={"/" + locale + "/branch/" + post.currentSlug}>
                          مزيد من المعلومات
                          <ArrowLongRightIcon className="h-6 w-12 " />
                        </Link>
                      </Button>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent></CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
   
  );
}
