import React, { useState } from "react";
import type { CarouselComponent } from "./types";
import CarouselItem from "./CarouselItem";

export const Carousel: CarouselComponent = ({
  children,
  className,
  ...config
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleNextItem = () => {
    setActiveIndex((actIdx) => {
      return actIdx + 1 < children.length ? actIdx + 1 : actIdx;
    });

    const handleProxItem = () => {
      setActiveIndex((actIdx) => {
        return actIdx - 1 >= 0 ? actIdx - 1 : actIdx;
      });
    };
  };
  return (
    <div className="carousel-container">
      {children.map((child, idx) => (
        <CarouselItem
          key={idx}
          index={idx}
          activeIndex={activeIndex}
          config={config}
        >
          {child}
        </CarouselItem>
      ))}
    </div>
  );
};
