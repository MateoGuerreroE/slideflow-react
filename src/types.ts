type Size = "sm" | "md" | "lg" | "xl" | "full";

export type CarouselConfiguration = {
  radius?: Size;
  className?: string;
  width?: "auto" | string;
  height?: "auto" | string;
  showNavigation?: boolean;
  showControls?: boolean;
  autoSlide?: boolean;
};

export interface CarouselProps extends CarouselConfiguration {
  children: React.ReactNode[];
}

export type CarouselComponent = (props: CarouselProps) => JSX.Element;
