import React from 'react'
import Slideshow from './Slideshow'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Heading from '../../ui/Heading';
import "./styles.css"
const Slider = () => {
  return (
    <div className='py-5'>
    <Heading bigTXT={"SPECIAL SERVICE"} smallTXT={"What Special services we are offering now"}/>
    <Swiper
    className="mySwiper swiper-h"
    spaceBetween={50}
    loop={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    style={{
        padding:"20px 0"
    }}
    breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        991: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 100,
        },
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
    </div>
  )
}

export default Slider