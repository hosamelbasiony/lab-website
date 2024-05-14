"use client"

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Accreditation() {
  return (
    // <div className="grid grid-cols-1 lg:grid-cols-4 mt-12 gap-12"></div>
    <div className="mt-16 border-t-2 border-gray-200 dark:border-gray-800 grid grid-cols-1 lg:grid-cols-2">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-4/5 lg:w-6xl mx-auto py-0 pt-12 mt-12"
        orientation="horizontal"
        style={{ direction: "ltr" }}
      >
        <CarouselContent>
          {[1, 2, 3, 4].map((post, idx) => (
            <CarouselItem key={idx}>
              <Image
                key={idx}
                alt="Tarqeem"
                className="dark:bg-gray-300 rounded-lg mx-auto"
                src={"/images/testimonials/" + (idx + 1) + ".jpg"}
                // style={{ maxWidth: "200px", maxHeight: "200px" }}
                width={500}
                height={250}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
