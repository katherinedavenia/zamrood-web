import Image from "next/image";

const highlights = [
  {
    id: 1,
    title: "Personal Itineraries",
    desc: "Our premium travel services offer tailor-made itineraries crafted to suit your unique preferences and desires.",
    src: "/favicon.ico",
  },
  {
    id: 2,
    title: "Exclusive Experiences",
    desc: "From private charters to behind-the-scenes tours, we offer access to unique opportunities that are designed to elevate your trip to the next level.",
    src: "/favicon.ico",
  },
  {
    id: 3,
    title: "Best Facilities",
    desc: "Experience the epitome of with our premium facility, designed to provide an unparalleled level of comfort and indulgence.",
    src: "/favicon.ico",
  },
];

export const AboutSection = () => {
  return (
    <div>
      <p>Beyond Premium</p>
      <p>Elevate Your Experience</p>
      <div>
        {highlights.map(({ id, src, title, desc }) => (
          <div key={id}>
            <Image src={src} alt="title" width={10} height={10} />
            <p>{title}</p>
            <p>{desc}</p>
          </div>
        ))}
      </div>
      <div>
        <Image src="/temp.png" alt="title" width={10} height={10} />
        <div>
          <p>Discover Tailored Experiences</p>
          <p>
            Create your own journey, personalized to suit your preferences and
            interests, ensuring a once-in-a-lifetime adventure awaits.
          </p>
          <button>Customize Your Trip</button>
        </div>
      </div>
      <Image src="/temp.png" alt="title" width={10} height={10} />
    </div>
  );
};
