import { Container } from "~/components/Container";
import { PhotoCarousel } from "~/components/PhotoCarousel";

const images = [
  {
    id: 1,
    src: "/footages-1.webp",
    alt: "footages-1",
  },
  {
    id: 2,
    src: "/footages-2.webp",
    alt: "footages-2",
  },
  {
    id: 3,
    src: "/footages-3.webp",
    alt: "footages-3",
  },
  {
    id: 4,
    src: "/footages-4.webp",
    alt: "footages-4",
  },
  {
    id: 5,
    src: "/footages-5.webp",
    alt: "footages-5",
  },
  {
    id: 6,
    src: "/footages-6.webp",
    alt: "footages-6",
  },
];

export const FootagesSection = () => {
  return (
    <div className="bg-[#D6B66B] py-20">
      <Container>
        <div className="mb-6">
          <img
            src="/luxury-footages.webp"
            alt="luxury-footages"
            className="w-full sm:w-[380px] h-auto pointer-events-none"
          />
        </div>

        <div className="hidden sm:flex flex-col">
          <div className="grid grid-cols-3 gap-6">
            {images.slice(0, 3).map(({ id, src, alt }) => (
              <img
                key={id}
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
                style={{ height: "auto", aspectRatio: "1/1" }}
              />
            ))}
          </div>
          <img
            src="/seperator-white.svg"
            alt="seperator"
            className="h-auto w-full pointer-events-none my-4"
          />
          <div className="grid grid-cols-3 gap-6">
            {images.slice(3).map(({ id, src, alt }) => (
              <img
                key={id}
                src={src}
                alt={alt}
                className="w-full h-auto object-cover"
              />
            ))}
          </div>
        </div>

        <div className="sm:hidden">
          <PhotoCarousel images={images} />
        </div>
      </Container>
    </div>
  );
};
