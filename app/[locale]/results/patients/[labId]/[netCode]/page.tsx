"use client";

import React from "react";
import axios from "axios";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface reg {
  patient: any;
  lab_id: string;
  created_at: string;
  panels: any[]
}

function getResults(labId: string, onlineKey: string) {
  // let labId = "240301139";
  // let onlineKey = "95180";

  // https://pcr.tibalab.com/reg/240301139/95180

  return axios.get(
    `${process.env.NEXT_PUBLIC_LAB_API_URL}api3/online-results/visit/${labId}/${onlineKey}`
  );
  //.then( (ret: any) => {});

  // toast({
  //   title: "You submitted the following values:",
  //   description: (
  //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //     </pre>
  //   ),
  // });
}

interface pageParams {
  params: any;
}

export default function PatientResultsPage({ params }: pageParams) {
  const locale = useLocale();
  const initialized = React.useRef(false);
  const [data, setData] = React.useState<reg>({});

  const pathname = usePathname();

  React.useEffect(() => {
    if (!initialized.current) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_LAB_API_URL}api3/online-results/visit/${params.labId}/${params.netCode}`
        )
        .then((ret) => {
          setData(ret.data);
        });
    }

    initialized.current = true;
  }, []);

  return (
    <div className="rounded-md border-2 border-gray-100 dark:border-gray-700 p-8 my-8">
      {data.patient != null ? (
        <div>
          <h1 className="my-4 text-3xl text-center font-bold text-gray-600 dark:text-gray-200">
            {locale == "ar" ? "تفاصيل الزيارة" : "Visit Details"}
          </h1>
          <h1 className="m-2">
            {data.patient.title} - {data.patient.name}
          </h1>
          <h1>
            <span className="m-2">
              {locale == "ar" ? "رقم الزيارة" : "Visit Id"}
            </span>
            <span className="text-primary">{data.lab_id}</span>
          </h1>
          <h1 className="text-gray-500 mt-2 mb-4 mx-2 dark:text-gray-300">
            {data.created_at.substring(0, 10)}
          </h1>
          <h1 className="mb-2 border-b-2 mx-2">
            {locale == "ar" ? "نتائج التحاليل" : "Test results"}
          </h1>
          {data.panels.map((panel, index) => (
            <h1
              className="text-gray-700 dark:text-gray-300 text-sm"
              key={index}
            >
              <span className="text-xl mx-2">📌</span>
              {panel.report_name}
              {panel.verified == 1 ? (
                <span className="mx-4 text-primary font-bold">
                  {locale == "ar" ? "جاهزة" : "Ready"}
                </span>
              ) : (
                <span className="text-red-500 mx-4 font-bold">
                  لم تكتمل بعد
                </span>
              )}
            </h1>
          ))}

          <Button className="mt-8 mx-4">
            {locale == "en" ? "Display Results" : "عرض النتائج"}
          </Button>

          <Button asChild className="mt-8" variant="outline">
            <Link
              href={
                locale == "ar"
                  ? pathname.replace("/ar/", "/en/")
                  : pathname.replace("/en/", "/ar/")
              }
              className="dark:text-gray-50"
            >
              {locale == "en" ? "استخدام اللغة العربية" : "Use English"}{" "}
            </Link>
          </Button>
        </div>
      ) : (
        "..."
      )}
    </div>
  );
}
