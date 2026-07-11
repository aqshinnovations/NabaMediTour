import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css"; // Centralized Swiper styling
import type { SwiperOptions } from "swiper/types";

interface IMCSliderProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  getLink?: (item: T) => string | undefined; // New optional prop
  navigation?: boolean;
  breakpoints?: SwiperOptions["breakpoints"];
  spaceBetween?: number;
  nextClassName?: string;
  prevClassName?: string;
}

const IMCCarousel = <T,>({
  items,
  renderItem,
  getLink,
  navigation = true,
  breakpoints = {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  spaceBetween = 20,
  nextClassName = "custom-next",
  prevClassName = "custom-prev",
}: IMCSliderProps<T>) => {
  return (
    <div className="carousel-wrapper">
      <Swiper
        modules={[Navigation]}
        navigation={
          navigation
            ? {
                nextEl: `.${nextClassName}`,
                prevEl: `.${prevClassName}`,
              }
            : false
        }
        spaceBetween={spaceBetween}
        breakpoints={breakpoints}
        style={{ width: "100%" }}
      >
        {items.map((item, index) => {
          const content = renderItem(item, index);
          const link = getLink?.(item);

          return (
            <SwiperSlide key={index}>
              {link ? (
                <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
                  {content}
                </Link>
              ) : (
                content
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
      {navigation && (
        <>
          <div className={`${prevClassName} carousel-arrow carousel-prev`}>‹</div>
          <div className={`${nextClassName} carousel-arrow carousel-next`}>›</div>
        </>
      )}
    </div>
  );
};

export default IMCCarousel;
