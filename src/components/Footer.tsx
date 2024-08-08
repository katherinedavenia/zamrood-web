import Image from "next/image";

const socialMedias = [
  {
    id: 1,
    src: "/temp.png",
    title: "Facebook",
  },
  {
    id: 2,
    src: "/temp.png",
    title: "Instagram",
  },
  {
    id: 3,
    src: "/temp.png",
    title: "Mail",
  },
];

export const Footer = () => {
  return (
    <div>
      <p>© 2023 Zamrood by PT Teknologi Pandu Wisata</p>
      <div>
        {socialMedias.map(({ id, src, title }) => (
          <Image key={id} src={src} alt={title} width={10} height={10} />
        ))}
      </div>
    </div>
  );
};
