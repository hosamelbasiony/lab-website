"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
// import Autoplay from 'embla-carousel-autoplay'

type PageProps = {
  branches: any[];
  locale: string;
};

export default function BranchCaroselEmbla({ branches, locale }: PageProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    // <div className='embla mx-auto mt-12 max-w-lg'>
    <div
      className="embla w-full lg:w-6xl mx-auto py-0 pt-12"
      style={{ direction: "ltr" }}
    >
      <div className="embla__viewport h-auto border-0" ref={emblaRef}>
        <div className="embla__container h-full">
          {branches.map((post, index) => (
            <div className="embla__slide flex items-center justify-center" key={index}>
              <Card
                className="border-0 bg-blue-100s dark:bg-blue-900s m-0 w-full rounded-none"
                key={index}
              >
                <CardHeader>
                  <CardTitle className="text-center text-xl text-gray-600 dark:text-gray-200 m-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-center my-2">
                    <span className="flex flex-row">
                      <span className="w-full text-sm lg:text-md text-gray-600 dark:text-gray-200 leading-6 line-clamp-1 text-center flex flex-row space-around">
                        <span className="line-clamp-10 whitespace-nowrap0 text-center w-full whitespace-pre-line">
                          📌 {post.description}
                        </span>
                      </span>
                    </span>
                    <div>
                      <Button asChild className="mt-6 dark:text-gray-50">
                        {/* <Link href="/"> */}
                        <Link
                          href={"/" + locale + "/branch/" + post.currentSlug}
                        >
                          مزيد من المعلومات
                          <ArrowLongRightIcon className="h-6 w-12 " />
                        </Link>
                      </Button>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent></CardContent>
              </Card>
            </div>
          ))}
          {/* <div className="embla__slide flex items-center justify-center">
            Slide 1
          </div>
          <div className="embla__slide flex items-center justify-center">
            Slide 2
          </div>
          <div className="embla__slide flex items-center justify-center">
            Slide 3
          </div> */}
        </div>
      </div>

      <div className="mt-3 flex justify-between">
        <button
          className="w-20 bg-black px-2 py-1 text-sm text-white"
          onClick={scrollPrev}
        >
          {locale=="en" ? "Prev" : "السابق"}
        </button>
        <button
          className="w-20 bg-black px-2 py-1 text-sm text-white"
          onClick={scrollNext}
        >
          {locale=="en" ? "Next" : "التالي"}
        </button>
      </div>
    </div>
  );
}
