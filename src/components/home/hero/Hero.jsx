import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Slideshow from "./Slideshow";
import "./styles.css"

export default function Hero() {
  return (
    <>
      <Swiper
        className="mySwiper swiper-h"
        spaceBetween={50}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <Slideshow />
        </SwiperSlide>
        <SwiperSlide>
          <Slideshow />
        </SwiperSlide>
        <SwiperSlide>
          <Slideshow />
        </SwiperSlide>
        <SwiperSlide>
          <Slideshow />
        </SwiperSlide>
        <SwiperSlide>
          <Slideshow />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
