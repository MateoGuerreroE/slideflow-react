import React from "react";
import { CarouselConfiguration, CarouselProps } from "./types";
import { RoundedPickHelper } from "./helpers";

type Props = {
  index: number;
  activeIndex: number;
  children: React.ReactNode;
  config?: CarouselConfiguration;
};

export default function CarouselItem({
  index,
  activeIndex,
  children,
  config,
}: Props) {
  const offset = (index - activeIndex) / 4;
  const direction = Math.sign(index - activeIndex);
  const absOffset = Math.abs(offset);

  const cssTransformProperties = `
        rotateY(calc(${offset} * 55deg))
        scaleY(calc(1 +  ${absOffset}  * -0.5))
        translateX(calc( ${direction} * -3.5rem))
        translateZ(calc( ${absOffset} * -35rem))
       `;

  const cssOpacity = `
        ${Math.abs(index - activeIndex) >= 3 ? "0" : "1"}`;

  const cssDisplay = `
        ${Math.abs(index - activeIndex) >= 3 ? "none" : "block"},
  `;

  return (
    <div
      className={`carousel-item ${RoundedPickHelper[config?.radius || "full"]}`}
      style={{
        transform: cssTransformProperties,
        opacity: cssOpacity,
        display: cssDisplay,
      }}
    >
      {children}
    </div>
  );
}
