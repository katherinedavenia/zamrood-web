import SkeletonLoader from "./SkeletonLoader";

export const ProductCardSmallLoader = () =>
  Array.from({ length: 4 }).map((_, index) => (
    <div
      key={index}
      className="w-[70vw] sm:w-[37vw] min-w-[70vw] sm:min-w-[37vw] lg:w-auto lg:min-w-0"
    >
      <SkeletonLoader key={index} className="h-[400px]" />
    </div>
  ));
