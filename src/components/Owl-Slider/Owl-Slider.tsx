import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./Owl-Slider.scss";

import {Autoplay, Pagination, Scrollbar, Navigation } from "swiper";

const bp = {
  0: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
  1080: {
    slidesPerView: 6,
    spaceBetween: 20,
  },
  1320: {
    slidesPerView: 8,
    spaceBetween: 20,
  },
};

type Props = {
  children?: any;
  breakpoints?: any;
};

const OwlSlider = ({ breakpoints = bp, children }: Props) => {
  return (
    <div className="owl-slider-box">
      <Swiper
        slidesPerView={1}
        spaceBetween={3}
        breakpoints={breakpoints}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,Pagination, Scrollbar, Navigation]}
        className="mySwiper"
      >
        {children.map((item: any, index: number) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OwlSlider;
