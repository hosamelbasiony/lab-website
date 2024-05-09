"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useLocale } from "next-intl";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  const locale = useLocale();

  return (
    <>
      <h1 className="text-xl lg:text-3xl text-primary text-center my-4 border-b-2 pb-4 mb-12 mt-8 font-semibold" style={{"lineHeight": "1.5"}}>
        {locale == "ar"
          ? "رجاء كتابة رقم التسجيل وكود الانترنت"
          : "Please type in the registration number and internet code"}
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{locale == "ar"? "رقم التسجيل" : "Lab Id"}</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>رقم التسجيل</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{locale == "ar"? "الرقم السري" : "Net code"}</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>الرقم السري</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">{locale == "ar"? "عرض النتيجة" : "Display results"}</Button>
        </form>
      </Form>
      <div className="mb-20"></div>
    </>
  );
}

// "use client";
// import Link from "next/link";
// import React from "react";

// export default function PatientResults() {
//   return (
//     <div>
//       <Link href="/"className="text-2xl text-primary font-bold text-center">
//         <h1>
//           Patient Results Here<br></br> [click to go back]
//         </h1>
//       </Link>
//     </div>
//   );
// }
