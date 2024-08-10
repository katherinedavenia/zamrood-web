import Image from "next/image";
import Link from "next/link";

export const ExploreMoreButton = () => (
  <Link href="https://www.zamrood.com/destination" target="_blank">
    <div className="flex flex-row items-center justify-center cursor-pointer hover:underline">
      <Image
        src="/icons/arrow-right.svg"
        alt="arrow-right"
        width={0}
        height={0}
        className="pointer-events-none h-[30px] w-[30px]"
      />
      <p className="uppercase font-light text-base pl-3 text-secondary">
        Explore more
      </p>
    </div>
  </Link>
);
