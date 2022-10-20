import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

import "./Slider.scss";

type Props = {
  items: string[];
};

function Slider({ items }: Props) {
  return (
    <>
      <Swiper
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} data-hash={`slide${++index}`}>
            <img src={item} alt={`item-1${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default Slider;
