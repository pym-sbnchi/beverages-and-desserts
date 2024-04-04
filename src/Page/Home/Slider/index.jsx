import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div><img src='image/1.jpg' alt=''/></div></SwiperSlide>
        <SwiperSlide><div><img src='image/2.jpg' alt=''/></div></SwiperSlide>
        <SwiperSlide><div><img src='image/3.jpg' alt=''/></div></SwiperSlide>
        <SwiperSlide><div><img src='image/4.jpg' alt=''/></div></SwiperSlide>
      </Swiper>
    </>
  );
}
