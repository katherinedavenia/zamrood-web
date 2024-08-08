import Image from "next/image";

const tempArticles = [
  {
    id: "f7d9313e-97b5-4fb1-bab9-56fbbdeea88d",
    slug: "best-places-dive-indonesia",
    title: "7 Best Places to Dive in Indonesia: From Bali to Wakatobi",
    summary:
      "Indonesia offers a variety of amazing diving sites and beautiful underwater views, including Bali, Wakatobi, Raja Ampat, Komodo, Bunaken, Flores, and Menjangan Island, which are considered the top seven places for diving in Indonesia.",
    featured_image:
      "https://images.unsplash.com/photo-1494005612480-90f50fd9376f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MjkwNzV8MHwxfHNlYXJjaHwxfHxkaXZpbmclMjBpbmRvbmVzaWF8ZW58MHx8fHwxNjgzMjYwMTYx&ixlib=rb-4.0.3&q=80&w=1080",
    featured_image_caption: "Photo by Andres Abogabir on Unsplash",
    read_time: "0 mins baca",
  },
  {
    id: "c2ec58f2-a2f8-42b4-a41d-0d25875ad514",
    slug: "best-time-visit-indonesia-weather-seasons",
    title:
      "The Best Time to Visit Indonesia: A Guide to the Country's Weather and Seasons",
    summary:
      "Indonesia is a country with incredible natural beauty. However, the weather and seasons in Indonesia can affect your holiday experience there. By knowing the best time to visit Indonesia and checking the weather forecast, you can plan an optimal and personalized vacation according to your own preferences.",
    featured_image:
      "https://images.unsplash.com/photo-1646432581107-06cd4333cfde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MjkwNzV8MHwxfHNlYXJjaHw3fHxmb3Jlc3QlMjBrYWxpbWFudGFufGVufDB8fHx8MTY4MzI2ODcxOA&ixlib=rb-4.0.3&q=80&w=1080",
    featured_image_caption: "Photo by Barkah Wibowo on Unsplash",
    read_time: "0 mins baca",
  },
];

export const ArticlesSection = () => {
  return (
    <div>
      <div>
        <Image src="/temp.png" alt="title" width={10} height={10} />
        <p>Want to see other destinations? Check us out at our website</p>
        <div>
          <p>pandooin.com</p>
          <p>icon</p>
        </div>
      </div>
      <div>
        <p>Articles</p>
        <p>Our curated writings, offering something for every reader.</p>
      </div>
      <div>
        {tempArticles.map(
          ({ id, title, featured_image, featured_image_caption }) => (
            <div key={id}>
              <Image
                src={featured_image}
                alt={featured_image_caption}
                width={10}
                height={10}
              />
              <p>{title}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};
