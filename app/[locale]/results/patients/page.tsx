"use client";

import axios from 'axios';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter, usePathname } from 'next/navigation'

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
  username: z.string().min(3, {
    // message: "Username must be at least 2 characters.",
    message: "",
  }),
  password: z.string().min(4, {
    // message: "Username must be at least 2 characters.",
    message: "",
  }),
});

export default function InputForm() {

  const locale = useLocale();
  const router = useRouter()
  const pathname = usePathname();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {

    // alert(JSON.stringify(data));
    // {"username":"1111","password":"2222"}

    let labId = data.username;
    let onlineKey = data.password;
    
    // let labId = "240301139";
    // let onlineKey = "95180";

    router.push(`${pathname}/${labId}/${onlineKey}`);
    
  }

  //  let url = `${environment.apiUrl}api3/online-results/visit/${this.visit.lab_id}/${this.visit.online_key}`;

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
          <Button className='dark:text-white' type="submit">{locale == "ar"? "عرض النتيجة" : "Display results"}</Button>
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
