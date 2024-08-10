import Link from "next/link";
import { Container } from "~/components/Container";
import { services } from "~/utils/constants";

export const AboutSection = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center pt-20 pb-10">
        <div className="flex flex-col items-center justify-center mb-10 sm:mb-14">
          <img
            src="/beyond-premium.png"
            alt="beyond-premium"
            className="h-auto w-[380px] pointer-events-none"
          />
          <p
            className="text-secondary text-[28px] sm:text-3xl font-bold uppercase text-center leading-tight"
            style={{ fontFamily: "Unbounded" }}
          >
            Elevate Your Experience
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center pb-12 sm:pb-20">
          {services.map(({ id, src, title, desc }) => (
            <div
              key={id}
              className="flex flex-col items-center px-5 mb-5 sm:mb-0"
            >
              <img
                src={src}
                alt={title}
                className="w-[110px] h-auto pointer-events-none"
              />
              <p className="text-primary uppercase text-center font-semibold text-xl mb-1">
                {title}
              </p>
              <p className="text-center leading-snug text-sm font-light">
                {desc}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center xl:px-[10vw] pb-20">
          <img
            src="/rectangle.png"
            alt="discover-tailored-experiences"
            className="h-auto sm:w-[270px] lg:w-[300px]"
          />
          <div className="flex flex-col justify-center items-center sm:items-start pl-6">
            <p
              className="text-secondary text-[26px] font-bold leading-tight mb-2 text-center sm:text-start"
              style={{ fontFamily: "Unbounded" }}
            >
              Discover Tailored Experiences
            </p>
            <p className="text-base font-light leading-snug mb-4 text-center sm:text-start">
              Create your own journey, personalized to suit your preferences and
              interests, ensuring a once-in-a-lifetime adventure awaits.
            </p>
            <Link
              href="https://pandooin.com/id/tailor-made/create"
              target="_blank"
            >
              <button className="w-full sm:w-fit bg-secondary rounded-full text-white font-medium text-base w-fit py-2 px-5 hover:opacity-90 transition duration-300 ease-in-out">
                Customize Your Trip
              </button>
            </Link>
          </div>
        </div>
        <img
          src="/seperator-color.svg"
          alt="title"
          className="w-full h-auto pointer-events-none"
        />
      </div>
    </Container>
  );
};
