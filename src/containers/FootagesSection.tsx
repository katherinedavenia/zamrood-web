import Image from "next/image";

const images = [
  {
    id: 1,
    src: "/temp.png",
    alt: "wkwk",
  },
  {
    id: 2,
    src: "/temp.png",
    alt: "wkwk",
  },
  {
    id: 3,
    src: "/temp.png",
    alt: "wkwk",
  },
  {
    id: 4,
    src: "/temp.png",
    alt: "wkwk",
  },
  {
    id: 5,
    src: "/temp.png",
    alt: "wkwk",
  },
  {
    id: 6,
    src: "/temp.png",
    alt: "wkwk",
  },
];

export const FootagesSection = () => {
  return (
    <div>
      <p>Luxury Footages</p>
      {/* desktop */}
      <div>
        {images.slice(0, 3).map(({ id, src, alt }) => (
          <Image key={id} src={src} alt={alt} width={10} height={10} />
        ))}
        <Image src="/temp.png" alt="title" width={10} height={10} />
        {images.slice(3).map(({ id, src, alt }) => (
          <Image key={id} src={src} alt={alt} width={10} height={10} />
        ))}
      </div>
      {/* mobile */}
      <div>
        <p>abc</p>
      </div>
    </div>
  );
};
