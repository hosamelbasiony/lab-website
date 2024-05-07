import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { useLocale, useTranslations } from "next-intl";
import { client } from "@/app/lib/sanity";
import React from "react";

export const revalidate = 60 // revalidate at most every minute

const getData = async (locale: string) => {
  const query = `
    *[_type == 'hero' && locale == '${locale}' && labid == '${process.env.LAB_ID}']`;

  const list = await client.fetch(query);

  return list[0];
};

export default async function Footer() {
  const locale = useLocale();
  const t = useTranslations("Index");
  //   let labData = {
  //     facebook: "",
  //     twitter: "",
  //     instagram: "",
  //     phone: "",
  //     email: "",
  //   };

  const labData = await getData(locale);

  return (
    <footer className="max-w-6xl mx-auto py-8 px-6 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-8">
        <div className="col-lg-4">
          <div className="clm f-clm">
            <div className="mb-8">
              <img
                src="https://tibalab.com/wp-content/uploads/2021/11/tibalab-1.png"
                alt="Blazma"
                style={{ maxWidth: "140px", height: "auto" }}
              />
            </div>
            <div>
              <p className="text-gray-600 text-sm">{t("mission")}</p>
              <div className="mt-4">
                <div className="flex flex-row">
                  <h5 className="text-lg text-gray-800 font-bold mr-4">
                    {t("followUs")}
                  </h5>
                  <a href={labData.facebook} className="mx-2" target="_blank">
                    <img
                      width={20}
                      height={20}
                      src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-128.png"
                    ></img>
                  </a>
                  <a href={labData.twitter} className="mx-2" target="_blank">
                    <img
                      width={20}
                      height={20}
                      src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Tumblr5_svg-128.png"
                    ></img>
                  </a>
                  <a href={labData.instagram} className="mx-2" target="_blank">
                    <img
                      width={20}
                      height={20}
                      src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-128.png"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-0 gap-8">
          <div>
            <h1 className="text-xl text-gray-600 font-semibold mt-16 mb-10 lg:mt-0">
              {t("contactInfo")}
            </h1>

            <ul className="text-sm text-gray-600">
              <li>
                <a
                  href="tel:920013146"
                  className="flex flex-row my-4"
                  dir="ltr"
                >
                  <PhoneIcon width={20} className="text-sm text-red-600 mr-2" />
                  <span className="px-2">{labData.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@acl.com.sa"
                  className="flex flex-row"
                  dir="ltr"
                >
                  <EnvelopeIcon
                    width={20}
                    className="text-sm text-red-600 mr-2"
                  />
                  <span className="px-2">{labData.email}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            {/* <h1 className="text-xl text-gray-600 font-semibold mb-12">
            Download the app
          </h1>

          <a
            href="https://apps.apple.com/us/app/advanced-cell-laboratory/id1635999823"
            target="_blank"
            className="market-btn apple-btn"
            role="button"
          >
            <span className="market-button-subtitle">Get it on</span>
            <span className="market-button-title">App Store</span>
          </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
