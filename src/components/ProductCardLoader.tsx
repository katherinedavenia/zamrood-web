import SkeletonLoader from "./SkeletonLoader";

export const ProductCardLoader = () => (
  <div>
    {Array.from({ length: 4 }).map((_, index) => (
      <div
        key={index}
        className={`h-[250px] sm:h-[380px] flex ${
          index % 2 !== 0 ? "flex-row" : "flex-row-reverse"
        } justify-between gap-6 mb-20 sm:mb-24`}
      >
        <div className="flex flex-col justify-between w-1/2">
          <div>
            <SkeletonLoader className="h-[25px] mb-2" />
            <SkeletonLoader className="h-[50px] mb-2" />
            <SkeletonLoader className="h-[25px] mb-10" />
            <SkeletonLoader className="h-[100px]" />
          </div>
          <SkeletonLoader className="h-[70px]" />
        </div>
        <SkeletonLoader className="h-full w-1/2" />
      </div>
    ))}
  </div>
);
