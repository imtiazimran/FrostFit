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

function Header() {
  const [api, setApi] = useState<CarouselApi>();
  const [_current, setCurrent] = useState(0);
  const [_count, setCount] = useState(0);
  const plugin = useRef(Autoplay({ delay: 2000 }));
  const sliderContent = [
    {
      id: 1,
      src: "https://i.ytimg.com/vi/KXiRTu7dWGQ/maxresdefault.jpg",
      alt: "image",
    },
    {
      id: 2,
      src: "https://st.depositphotos.com/10614052/52669/i/600/depositphotos_526690012-stock-photo-beautiful-young-couple-winter-clothes.jpg",
      alt: "image",
    },
    {
      id: 3,
      src: "https://img.freepik.com/free-photo/pretty-charming-young-woman-red-wall-winter-outfit_291650-780.jpg?t=st=1717614726~exp=1717618326~hmac=e48c8f5d3d86d453b363c7509a41d93fb138ba1e8ba456e785950ac08f651a0f&w=996",
      alt: "image",
    },
    {
      id: 4,
      src: "https://img.freepik.com/free-photo/portrait-bearded-male-dressed-warm-jacket-scarf-hold-backpack-isolated-grey-background_613910-15968.jpg?t=st=1717614843~exp=1717618443~hmac=8a13a878cb3c0c44697ba6d826caa6b9e6e245f634237163e93614ba115a847d&w=996",
      alt: "image",
    },
    {
      id: 5,
      src: "https://img.freepik.com/free-photo/cute-girl-red-winter-clothes_23-2148333147.jpg?t=st=1717615170~exp=1717618770~hmac=d3b5f54325696b9fb3739a5c27c1eb83e570e0329a20d76d7fd956691ca66352&w=996",
      alt: "image",
    },
    {
      id: 6,
      src: "https://img.freepik.com/free-vector/flat-winter-clothes-essentials-set_23-2148374778.jpg?t=st=1717615241~exp=1717618841~hmac=8244d786db047e568d11e1adbd79493d6e9cb8865d35fb1cd27561170f288489&w=740",
      alt: "image",
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
        className="w-full  mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col md:flex-row items-center justify-center p-6">
                    <div className="text-center w-1/2 mx-4">
                      <h1 className="text-2xl md:text-4xl">
                        Warm Hearts, Warm Clothes
                      </h1>
                      <p>
                        Join us in our mission to distribute winter clothes to
                        those in need. Together, we can ensure everyone stays
                        warm and comfortable during the cold season.
                      </p>
                      <Button className="mt-4">Learn More</Button>
                    </div>
                    <img
                      className="w-1/2 rounded aspect-video m-1"
                      src={sliderContent[index].src}
                      alt={sliderContent[index].alt}
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
