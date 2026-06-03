"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Card from "./ui/Card";

const SLIDER_IMAGES = [
  "/images/projects/Slide1.jpg",
  "/images/projects/Slide2.jpg",
];

const Aboutsection = ({ content }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <section
      className="text-gray-900 dark:text-white transition-colors"
      id="about"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="w-full max-w-[500px] mx-auto">
          <Card
            ref={emblaRef}
            className="overflow-hidden rounded-3xl bg-gray-200 dark:bg-[#181818] shadow-lg transition-colors"
          >
            <div className="flex">
              {SLIDER_IMAGES.map((src, index) => (
                <div
                  className="relative flex-[0_0_100%] min-w-0 h-[300px] sm:h-[450px] md:h-[500px]"
                  key={index}
                >
                  <Image
                    src={src}
                    alt={`Massage Service View ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </Card>

          <div className="flex justify-center gap-2 mt-4">
            {SLIDER_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  selectedIndex === index
                    ? "w-8 bg-blue-500 dark:bg-[#4D77FF]"
                    : "w-2 bg-gray-400 dark:bg-zinc-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 md:mt-0 text-left flex flex-col h-full ">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-wide transition-colors">
            {content.heading}
          </h2>

          <div className="text-base lg:text-lg space-y-4 text-gray-700 dark:text-[#ADB7BE] leading-relaxed transition-colors">
            {content.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;
