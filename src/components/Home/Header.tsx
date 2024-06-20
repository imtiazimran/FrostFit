/* eslint-disable @typescript-eslint/no-unused-vars */
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Header() {
  const [api, setApi] = useState<CarouselApi>();
  const [_current, setCurrent] = useState(0);
  const [_count, setCount] = useState(0);
  const plugin = useRef(Autoplay({ delay: 2000 }));

  const sliderContent = [
    {
      id: 1,
      src: "https://werecycleclothes.org.uk/wp-content/uploads/2024/01/helping-homeless-with-warm-clothes.jpg",
      alt: "image",
      headline: "Warm Hearts, Warm Clothes",
      description:
        "Join us in our mission to distribute winter clothes to those in need. Together, we can ensure everyone stays warm and comfortable during the cold season.",
    },
    {
      id: 2,
      src: "https://www.ncwlibraries.org/wp-content/uploads/Warm-Clothing-537x374-1.jpg",
      alt: "image",
      headline: "Stay Warm, Spread Warmth",
      description:
        "Your donations help us provide essential winter clothing to communities in need. Every contribution makes a difference.",
    },
    {
      id: 3,
      src: "https://www.wantedinmilan.com/i/gallery-zoom/storage/uploads/2012/11/165you4ne.jpg",
      alt: "image",
      headline: "Empowering Communities with Winter Essentials",
      description:
        "Be a part of our mission to ensure no one has to face the cold unprepared. Your support is invaluable.",
    },
    {
      id: 4,
      src: "https://www.pnj.com/gcdn/-mm-/582568e00c17e48a137dbf529626145d89c4861c/c=0-151-3000-1846/local/-/media/2018/01/17/Pensacola/Pensacola/636518005144074674-Helping-the-Homeless-003.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp",
      alt: "image",
      headline: "Distribute Hope, One Coat at a Time",
      description:
        "Help us distribute winter clothes to those who need them the most. Together, we can spread warmth and hope.",
    },
    {
      id: 5,
      src: "https://werecycleclothes.org.uk/wp-content/uploads/2023/12/Winter-donation-to-homeless-1200x663.jpg",
      alt: "image",
      headline: "Bringing Warmth to Those in Need",
      description:
        "Our mission is to provide winter clothes to those in need. Your generosity makes it possible.",
    },
    {
      id: 6,
      src: "https://werecycleclothes.org.uk/wp-content/uploads/2024/01/winter-clothes-donation-for-homeless.jpg",
      alt: "image",
      headline: "Your Winter Clothes Can Make a Difference",
      description:
        "Donate your winter clothes and make a real difference in someone's life. Every piece counts.",
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="slider-container max-h-[73vh] overflow-hidden">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{
          loop: true,
          dragFree: true,
        }}
        className="w-full mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {sliderContent.map((content) => (
            <CarouselItem key={content.id}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col-reverse md:flex-row items-center justify-center p-6">
                    <div className="text-center md:w-1/2 mx-1 md:mx-4">
                      <h1 className="text-2xl md:text-4xl">
                        {content.headline}
                      </h1>
                      <p>{content.description}</p>
                      <Link to={"/blogs"}>
                      <Button className="mt-4">See Blogs</Button>
                      </Link>
                    </div>
                    <img
                      className="md:w-1/2 rounded aspect-video m-1"
                      src={content.src}
                      alt={content.alt}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious disabled={false} />
        <CarouselNext disabled={false} />
      </Carousel>
    </div>
  );
}

export default Header;
