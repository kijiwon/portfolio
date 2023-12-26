import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../style/theme';
import { projectData } from '../data/projectData';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Pagination]);

const DetailWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  overflow-y: hidden;
  .swiper-pagination {
    width: fit-content;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 250px;
    right: 18px;
    transform: translateY(-100%);
    z-index: 1000;
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
  }
  .swiper-pagination-bullet-active {
    width: 14px;
    height: 14px;

    background-color: ${COLOR.main_red};
  }
`;

const DetailSlideWrapper = styled.div`
  width: 97%;
  height: 450px !important;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-left: 30px;
  background-color: ${COLOR.bg_green};
  border-radius: 20px;
  padding: 30px;
  img {
    width: 300px;
  }
`;

const ProjectDetail = () => {
  return (
    <DetailWrapper>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
      >
        {projectData.map((it) => (
          <SwiperSlide key={it.id}>
            <DetailSlideWrapper>
              <div>
                <p>{it.project}</p>
                <h2>{it.title}</h2>
                <p>{it.duration}</p>
              </div>
              <div>
                <img
                  src={process.env.PUBLIC_URL + `/assets/${it.id}.png`}
                  alt={it.title}
                />
                <p>{it.description}</p>
              </div>
            </DetailSlideWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </DetailWrapper>
  );
};

export default ProjectDetail;
