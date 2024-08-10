import Image from "next/image";
import { Container } from "./Container";
import Link from "next/link";
import { socialMedias } from "~/utils/constants";

export const Footer = () => {
  return (
    <div className="bg-secondary">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center text-white py-6 sm:py-5">
          <p className="text-sm font-light">
            © 2023 Zamrood by PT Teknologi Pandu Wisata
          </p>
          <div className="flex flex-row justify-center items-center mt-2.5 sm:mt-0">
            {socialMedias.map(({ id, src, title, link }) => (
              <Link key={id} href={link}>
                <Image
                  src={src}
                  alt={title}
                  width={0}
                  height={0}
                  style={{
                    width: "auto",
                    height: "20px",
                    objectFit: "contain",
                    marginLeft: "14px",
                  }}
                />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
