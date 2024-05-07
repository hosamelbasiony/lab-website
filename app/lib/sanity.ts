import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    apiVersion: '2023-05-03',
    dataset: 'production',
    projectId: 'wk3pizez',
    useCdn: false
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
    const ret = builder.image(source);
    // console.log(ret);
    return ret;
}