import Link from "next/link";
import { toRupiah } from "~/utils/helpers";

export const ProductCardSmall: React.FC<{
  url: string;
  src: string;
  alt: string;
  itineraryDay: number;
  itineraryName: string;
  partnerName: string;
  discountPrice: number;
  publicPrice: number;
}> = ({
  url,
  src,
  alt,
  itineraryDay,
  itineraryName,
  partnerName,
  discountPrice,
  publicPrice,
}) => (
  <>
    <Link href={url}>
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover mb-4 cursor-pointer"
        style={{ height: "auto", aspectRatio: "1/1" }}
      />
    </Link>
    <div className="flex flex-col justify-between h-[220px]">
      <Link href={url}>
        <p className="text-sm font-light">{itineraryDay} DAYS</p>
        <p
          className="text-primary font-semibold text-sm line-clamp-2 leading-snug mb-1 pr-5 cursor-pointer"
          style={{ fontFamily: "Unbounded" }}
        >
          {itineraryName}
        </p>
        {partnerName && (
          <p className="text-sm font-medium">Organized by {partnerName}</p>
        )}
      </Link>
      <div>
        <div className="mb-3">
          <p className="text-xs font-light  text-secondary">Start from</p>
          {discountPrice > 0 && (
            <p
              className="line-through font-medium text-xs text-[#B8B8B8]"
              style={{ fontFamily: "Unbounded" }}
            >
              {toRupiah(discountPrice)}
            </p>
          )}

          <p
            className="text-base font-medium text-primary"
            style={{ fontFamily: "Unbounded" }}
          >
            {toRupiah(publicPrice)}
          </p>
        </div>
        <Link href={url}>
          <button className="py-2 px-4 border-2 border-secondary rounded-full text-sm text-secondary font-medium hover:bg-[#00404020] transition duration-300 ease-in-out">
            See Details
          </button>
        </Link>
      </div>
    </div>
  </>
);
