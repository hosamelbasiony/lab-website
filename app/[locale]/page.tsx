import { useTranslations } from "next-intl";
import Branches from "../components/Branches";
import Hero from "../components/Hero";

export default function Home() {
  const t = useTranslations('Index');

  return (
    <>
      
      <Hero />

      <div className="mt-36 mb-24">
        <h1 className="text-center text-xl text-red-600 mb-2">{t('chooseLocation')}</h1>
        <h1 className="text-center text-4xl font-bold text-gray-600">{t('ourBranches')}</h1>
        <Branches />
      </div>

      {/* <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-5">
        {data.map((post, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription className="text-lg line-clamp-2">
                {post.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                width={500}
                height={500}
                src={urlFor(post.mainImage).url()}
                alt=""
              />
            </CardContent>
            <CardFooter>
              <p className="text-sm text-grey-300">
                {"2024-01-01 10:00:00 PM"}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div> */}
    </>
  );
}
