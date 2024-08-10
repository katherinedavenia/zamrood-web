"use client";
import Image from "next/image";
import Link from "next/link";
import { ArticleCardLoader } from "~/components/ArticleCardLoader";
import { Container } from "~/components/Container";
import { useGetArticles } from "~/hooks/useGetArticles";

export const ArticlesSection = () => {
  const { data: articles, isLoading, error } = useGetArticles();

  return (
    <Container>
      <div className="py-20">
        <div
          className="h-auto sm:h-[100px] flex flex-col sm:flex-row justify-center sm:justify-between items-center py-5 px-5 lg:px-7 text-white mb-14"
          style={{
            backgroundImage: `url(${"/landscape.png"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <img
            src="/zamrood-logo-white.png"
            alt="logo"
            className="h-12 sm:h-full w-auto mb-1 sm:mb-0"
          />
          <div className="flex flex-col justify-center items-center sm:items-end">
            <p className="text-sm lg:text-base font-light text-center leading-tight mb-1 sm:mb-0">
              Want to see other destinations? Check us out at our website
            </p>
            <Link href="https://pandooin.com/id" target="_blank">
              <div className="flex flex-row justify-center items-center cursor-pointer">
                <p className="text-base lg:text-lg font-semibold underline mr-2">
                  pandooin.com
                </p>
                <Image
                  src="/link-arrow.svg"
                  alt="arrow"
                  width={10}
                  height={10}
                />
              </div>
            </Link>
          </div>
        </div>
        <div>
          <p
            className="text-primary text-[28px] sm:text-3xl font-bold leading-tight mb-1"
            style={{ fontFamily: "Unbounded" }}
          >
            Articles
          </p>
          <p className="text-primary font-light text-xl leading-tight mb-5">
            Our curated writings, offering something for every reader.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 sm:items-stretch gap-6">
          {isLoading ? (
            <ArticleCardLoader />
          ) : !articles || error ? (
            <div className="text-base font-light py-4">No data available</div>
          ) : (
            articles.data.map(
              (
                { id, slug, title, featured_image, featured_image_caption },
                index
              ) => (
                <div
                  key={id}
                  className={`${
                    index === 0 && "sm:row-span-2 sm:col-span-2"
                  } h-full`}
                >
                  <Link
                    href={`https://pandooin.com/blog/article/${slug}`}
                    target="_blank"
                  >
                    <div className="h-full flex flex-col cursor-pointer">
                      <img
                        src={featured_image}
                        alt={featured_image_caption}
                        className="h-[240px] sm:h-full w-full object-cover grayscale hover:grayscale-0 transition duration-200 ease-in-out"
                      />
                      <div className="p-4 bg-primary">
                        <p className="text-sm lg:text-base font-semibold text-white leading-tight line-clamp-2">
                          {title}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            )
          )}
        </div>
      </div>
    </Container>
  );
};
