// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

// import required modules

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
} from "swiper/modules";
import Card from "./Card";

const Slider = ({ arr }) => {
  return (
    <>
      <Swiper
        loop={true}
        // loopFillGroupWithBlank={true}

        autoplay={{ delay: 3000 }}
        navigation={true}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="mySwiper"
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
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
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
        }}
      >
        {arr.map((tes, idx) => (
          <SwiperSlide className="swiper-slide" key={idx}>
            <Card {...tes}  />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
