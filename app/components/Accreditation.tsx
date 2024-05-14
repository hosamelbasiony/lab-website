import React from "react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 mt-12 gap-12 py-8 rounded-lg bg-[--ribbon-bg]">
      {[1, 2, 3, 4].map((post, idx) => (
        <Image
          key={idx}
          alt="Tarqeem"
          className="dark:bg-gray-300 rounded-lg mx-auto"
          src={"/images/accreds/" + (idx+1) + ".png"}
          style={{ maxWidth: "200px", maxHeight: "200px" }}
          width={200}
          height={200}
        />
      ))}
    </div>
  );
}
