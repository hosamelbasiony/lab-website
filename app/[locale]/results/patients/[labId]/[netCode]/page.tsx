"use client";

import React from "react";
// import { useState, useEffect } from "react";
// import io from "socket.io-client";
// import { io } from "socket.io-client";
import axios from "axios";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface reg {
  patient: any;
  lab_id: string;
  created_at: string;
  panels: any[];
  debt: number;
}

interface pageParams {
  params: any;
}

// export const pdfSocket = io("http://127.0.0.1:5000");

// pdfSocket.on("connection", () => {
//   alert("connection");
// });

export default function PatientResultsPage({ params }: pageParams) {
  const locale = useLocale();
  const initialized = React.useRef(false);

  const [loading, setLoading] = React.useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = React.useState<string>("...");
  const [someReady, setSomeReady] = React.useState<boolean>(true);

  // const [socket, setSocket] = useState<any>({});

  // useEffect(() => {
  //   const pdfSocket = io("http://127.0.0.1:5000");

  //   setSocket(pdfSocket);

  //   // Listen for incoming messages
  //   socket.on("message", (message:any) => {
  //     console.log(message);
  //   });

  //   // Clean up the socket connection on unmount
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [socket]);

  const [data, setData] = React.useState<reg>({
    patient: null,
    lab_id: "",
    created_at: "",
    panels: [],
    debt: 1,
  });

  const hndlReportClick = (data: reg) => {
    // let posted = {
    //   labid: params.labId,
    //   onlinekey: params.netCode,
    //   baseURL: process.env.NEXT_PUBLIC_LAB_API_URL,
    //   labname: "tibalab0",
    // };

    // const url = `http://127.0.0.1:5000/get-report/${params.labId}/${params.netCode}`;
    // axios.post(url, posted).then((ret) => {
    //   const byteCharacters = atob(ret.data.b64);
    //   const byteNumbers = new Array(byteCharacters.length);
    //   for (let i = 0; i < byteCharacters.length; i++) {
    //     byteNumbers[i] = byteCharacters.charCodeAt(i);
    //   }
    //   const byteArray = new Uint8Array(byteNumbers);
    //   const file = new Blob([byteArray], { type: "application/pdf;base64" });
    //   const fileURL = URL.createObjectURL(file);
    //   window.open(fileURL);
    // });

    const url = `${process.env.NEXT_PUBLIC_LAB_WHATSAPP_URL}/get-report/${params.labId}/${params.netCode}`;

    setLoading(true);

    axios.get(url).then((ret) => {
      const byteCharacters = atob(ret.data.b64);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const file = new Blob([byteArray], { type: "application/pdf;base64" });
      const fileURL = URL.createObjectURL(file);
      
      setLoading(false);
      
      window.open(fileURL);
    });
  };

  const pathname = usePathname();

  React.useEffect(() => {
    if (!initialized.current) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_LAB_API_URL}api3/online-results/visit/${params.labId}/${params.netCode}`
        )
        .then((ret) => {
          if (ret.data != null) {
            setData({
              ...ret.data,
              debt: parseFloat(ret.data.debt),
            });

            let found = ret.data.panels.find((x: any) => x.verified == 1);
            if (found) setSomeReady(true);
          } else {
            setLoadingMessage(
              locale == "ar"
                ? "لم يتم العثور على هذا السجل"
                : "Registration Not Found"
            );
          }
        });
    }

    initialized.current = true;
  }, []);

  return (
    <div className="rounded-md border-2 border-gray-100 dark:border-gray-800 p-8 my-8">
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
          <h1 className="mb-2 border-b-2 mx-2 pb-2">
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

          {loading ? (
            <div className="m-4 mt-8">
              <h1 className="text-2xl">
                {locale == "en"
                  ? "Preparing report .. please wait !"
                  : "جاري تجهيز التقرير .. رجاء الانتظار !"}{" "}
              </h1>
            </div>
          ) : (
            <></>
          )}

          {data.debt <= 0 ? (
            <Button
              onClick={() => hndlReportClick(data)}
              className="mt-8 mx-4 dark:text-white"
            >
              {locale == "en" ? "Display Results" : "عرض النتائج"}
            </Button>
          ) : (
            <h1 className="my-4 text-red-600 dark:text-red-400">
              {someReady
                ? locale == "en"
                  ? "Please contact us to get the results"
                  : "رجاء التواصل معنا للحصول على النتائج"
                : ""}
            </h1>
          )}

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
        <h1 className="text-center">{loadingMessage}</h1>
      )}
    </div>
  );
}
