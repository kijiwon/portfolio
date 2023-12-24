import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

const ProjectSwiper = () => {
  return (
    <Swiper
      centeredSlides={true} //가운데 정렬
      slidesPerView={1.5} //한 슬라이드에 보여줄 갯수
      spaceBetween={50} //슬라이드간 거리
      loop={true} //슬라이드 반복 여부
    >
      <SwiperSlide>1</SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
    </Swiper>
  );
};

export default ProjectSwiper;
