"use client";
import Link from "next/link";
import { toRupiah } from "~/utils/helpers";
import useImageSwitcher from "~/hooks/useImageSwitcher";

export const ProductCard: React.FC<{
  url: string;
  images: string[];
  alt: string;
  itineraryDay: number;
  itineraryName: string;
  partnerName: string;
  itineraryShortDescription: string;
  discountPrice: number;
  publicPrice: number;
  index: number;
}> = ({
  url,
  images,
  alt,
  itineraryDay,
  itineraryName,
  partnerName,
  itineraryShortDescription,
  discountPrice,
  publicPrice,
  index,
}) => {
  const currentImage = useImageSwitcher(images, 4000);

  return (
    <div
      className={`flex flex-col md:flex-row ${
        index % 2 !== 0 && "md:flex-row-reverse"
      } gap-4 mb-20 sm:mb-24`}
    >
      <div className="w-full h-[250px] sm:h-[380px] md:w-1/2">
        <Link href={url}>
          <img
            src={currentImage}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      <div
        className={`md:w-1/2 flex flex-col justify-between ${
          index % 2 !== 0 ? "pr-2 lg:pr-4" : "pl-2 lg:pl-4"
        }`}
      >
        <div>
          <Link href={url}>
            <p className="text-base font-light">{itineraryDay} DAYS</p>
            <p
              className="text-primary font-semibold text-2xl line-clamp-2 leading-snug mb-1 cursor-pointer"
              style={{ fontFamily: "Unbounded" }}
            >
              {itineraryName}
            </p>
            <p className="text-base font-medium mb-5">
              Organized by {partnerName}
            </p>
            <p className="text-sm font-light leading-snug line-clamp-5 xl:line-clamp-6 mb-6">
              {itineraryShortDescription}
            </p>
          </Link>
        </div>
        <div className="flex flex-row justify-between items-end">
          <div>
            <p className="text-base font-light">Start from</p>
            {discountPrice > 0 && (
              <p
                className="line-through font-medium text-lg text-[#B8B8B8]"
                style={{ fontFamily: "Unbounded" }}
              >
                {toRupiah(discountPrice)}
              </p>
            )}
            <p
              className="text-xl lg:text-2xl font-semibold text-primary"
              style={{ fontFamily: "Unbounded" }}
            >
              {toRupiah(publicPrice)}
            </p>
          </div>
          <Link href={url}>
            <button className="py-2 px-4 border-2 border-secondary rounded-full text-base text-secondary font-medium hover:bg-[#00404020] transition duration-300 ease-in-out">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
