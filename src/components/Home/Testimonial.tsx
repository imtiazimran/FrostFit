import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";

interface Testimonial {
  id: number;
  name: string;
  message: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    message:
      "Donating winter clothes through this platform was an amazing experience. Knowing that my contribution is helping those in need during the cold season brings me immense joy.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    message:
      "I am grateful for the opportunity to give back to the community. This platform makes it so easy to make a difference in someone's life.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Bob Miller",
    message:
      "Seeing the smiles on the faces of those who received the winter clothes was truly heartwarming. I highly recommend supporting this cause.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Alice Johnson",
    message:
      "Seeing the smiles on the faces of those who received the winter clothes was truly heartwarming. I highly recommend supporting this cause.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Boris Johnson",
    message:
      "Seeing the smiles on the faces of those who received the winter clothes was truly heartwarming. I highly recommend supporting this cause.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Cathy Johnson",
    message:
      "Seeing the smiles on the faces of those who received the winter clothes was truly heartwarming. I highly recommend supporting this cause.",
    image: "https://via.placeholder.com/150",
  },
];

const TestimonialCarousel: React.FC = () => {
  const plugin = useRef(Autoplay({ delay: 4000 }));
  return (
    <div className="testimonial-carousel-container border max-h-[70vh] overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          loop: true,
          dragFree: true,
        }}
        className="w-full mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id}>
              <div className="p-4">
                <Card>
                  <CardContent className="flex gap-3 flex-col items-center justify-center p-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div className="text-center">
                      <h3 className="text-lg font-semibold">
                        {testimonial.name}
                      </h3>
                      <div className="stars flex justify-center items-center">
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarIcon />
                        <StarIcon />
                      </div>
                      <p className="mt-2">{testimonial.message}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
