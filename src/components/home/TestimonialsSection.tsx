import React, { useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    id: 1,
    name: "Yasir Muhammed",
    company: "Founder and CEO of Whoyer",
    text: "Working with Artisto Designs has been an absolute game-changer for us at Whoyer. Their creativity, attention to detail, and commitment to excellence are unmatched. Every project they handled for us reflected our brand vision perfectly, and the turnaround time was impressive. I highly recommend Artisto to any company looking to elevate their branding and design.",
    rating: 5
  },
  {
    id: 2,
    name: "Shravan Narayan",
    company: "Founder and CEO of Code Cave",
    text: "Artisto Designs truly understands how to bring ideas to life. From our website UI to marketing materials, every piece of work they delivered was world-class. Their team is professional, responsive, and genuinely passionate about design. Choosing Artisto was one of the best decisions we made for our brand's visual identity.",
    rating: 5
  },
  {
    id: 3,
    name: "Azvan Sait",
    company: "Founder and CEO of Nexift",
    text: "Artisto Designs exceeded all our expectations. Their designs are not just visually stunning but also strategically crafted to match our business goals. Their collaborative approach made the entire process smooth and exciting. We're proud to have partnered with Artisto Designs and look forward to many more projects together.",
    rating: 5
  },
  {
    id: 4,
    name: "Adhil Muhamed",
    company: "Founder and CEO of Aidmak",
    text: "Artisto Designs brought our vision at Aidmak to life with creativity, precision, and style. Their ability to understand our needs and translate them into powerful designs made a huge impact on our brand presence. Working with Artisto was effortless and inspiring — they're not just designers; they're true creative partners.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const emblaRef = useRef(null);
  const [emblaNodeRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      emblaRef.current = emblaApi;
    }
  }, [emblaApi]);

  const scrollPrev = () => {
    emblaRef.current?.scrollPrev();
  };

  const scrollNext = () => {
    emblaRef.current?.scrollNext();
  };

  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-poppins mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground">Testimonials from satisfied customers</p>
        </div>

        <div className="relative">
          

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            ref={emblaNodeRef}
            className="w-full mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-white border border-gray-100 shadow-lg mx-2">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-artisto-royalblue text-artisto-royalblue"
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4">{testimonial.text}</p>
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
