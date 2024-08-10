import { Container } from "~/components/Container";

export const OpeningBannerSection = () => {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${"/banner.webp"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <div className="flex justify-center sm:justify-end items-center sm:items-start flex-col text-white h-screen sm:pb-[20vh]">
          <img
            src="/premium-travel.webp"
            alt="premium-travel"
            className="w-full sm:w-[400px] h-auto pointer-events-none mb-[-15px] sm:mb-[-25px]"
          />
          <p
            className="text-3xl sm:text-[38px] xl:text-[42px] font-bold text-center sm:text-start leading-tight mb-2"
            style={{ fontFamily: "Unbounded" }}
          >
            Beyond Expectation
          </p>
          <p className="text-lg font-light sm:w-2/3 xl:w-1/2 sm:pr-8 xl:pr-14 leading-snug mb-10 sm:mb-6 text-center sm:text-start">
            Experience the finest that Indonesia has to offer with our curated
            selection of premium trips, ensuring comfort every step of the way
          </p>
          <button className="w-fit py-2 px-5 border-2 border-white rounded-full text-base hover:bg-primary">
            Take me there
          </button>
        </div>
      </Container>
    </div>
  );
};
