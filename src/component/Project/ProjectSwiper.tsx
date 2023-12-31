/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import styled from 'styled-components';
import { COLOR, SIZE } from '../../style/theme';
import 'swiper/swiper.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';
import 'swiper/components/navigation/navigation.min.css';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';
import LinkButton from '../LinkButton';
import { projectData } from '../../data/projectData';

interface ProjectProps {
  openDetail: (projectId: string) => void;
}

const SwiperWrapper = styled.section`
  width: 80%;

  .swiper-button-prev,
  .swiper-button-next {
    color: ${COLOR.main_red};
    font-weight: 600;
  }

  @media screen and (max-width: ${SIZE.tablet}) {
    width: 90%;
    .swiper-button-prev,
    .swiper-button-next {
      color: ${COLOR.main_red};
      font-weight: 600;
      width: 10px;
    }
  }
`;

const SlideWrapper = styled.article`
  width: 98%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLOR.bg_green};
  border-radius: 20px;
  margin-left: 5px;
  padding-top: 15px;
  padding-bottom: 15px;

  @media screen and (max-width: ${SIZE.tablet}) {
    width: 100%;
    height: 640px;
    justify-content: space-around;
    margin-left: 0;
    padding: 10px 30px;
  }
`;

const SlideHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-size: 18px;
    color: ${COLOR.main_green};
    margin-right: 5px;
  }
  h2 {
    font-size: 24px;
    margin-bottom: 5px;
  }

  @media screen and (max-width: ${SIZE.tablet}) {
    span {
      font-size: 22px;
    }
    h2 {
      margin-bottom: 10px;
    }
    P {
      font-size: 20px;
    }
  }
`;

const SlideLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5px;

  @media screen and (max-width: ${SIZE.tablet}) {
    margin-bottom: 30px;
  }
`;

const SlideInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  img {
    width: 60%;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: ${SIZE.tablet}) {
    margin-top: -60px;
    font-size: 20px;
    text-align: center;
    img {
      width: 98%;
    }
  }
`;

const SkillListWrapper = styled.div`
  width: 65%;
  p {
    width: fit-content;
    padding: 3px 5px;
    margin-bottom: 8px;
    font-size: 16px;
    border-bottom: 2px solid ${COLOR.main_red};
  }

  @media screen and (max-width: ${SIZE.tablet}) {
    width: 100%;
    p {
      font-size: 20px;
      color: black;
      padding: 0 5px;
      border: none;
      border-bottom: 2px solid ${COLOR.main_red};
      border-radius: 0;
      margin-bottom: 10px;
    }
  }
`;

const SkillList = styled.ul`
  list-style: disc;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 6px;
  overflow-y: scroll;

  li {
    font-size: 14px;
    margin-left: 10px;
    white-space: nowrap;
  }

  @media screen and (max-width: ${SIZE.tablet}) {
    padding-left: 0;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8px;
    padding-left: 20px;
    li {
      font-size: 15px;
      margin-left: 0;
      margin-right: 10px;
    }
  }
`;

const DetailButton = styled.button`
  width: 65%;
  height: 34px;
  font-size: 18px;
  font-family: 'Jua';
  border: none;
  background-color: ${COLOR.bg};
  border-radius: 20px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${COLOR.hover_green};
    color: ${COLOR.bg};
  }

  @media screen and (max-width: ${SIZE.tablet}) {
    width: 100%;
    height: 40px;
    border-radius: 15px;
  }
`;

const ProjectSwiper = ({ openDetail }: ProjectProps) => {
  SwiperCore.use([Navigation]);

  return (
    <SwiperWrapper>
      <Swiper
        centeredSlides={false}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        navigation
        allowTouchMove={false}
        // breakpoints로 반응형 적용
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {projectData.map((it) => (
          <SwiperSlide key={it.id}>
            <SlideWrapper>
              <SlideHeader>
                <h2>
                  <span>[{it.project}]</span>
                  {it.title}
                </h2>
                <p>{it.duration}</p>
                <SlideLinkWrapper>
                  <LinkButton
                    text="배포링크"
                    link={it.pageLink}
                    icon={<FaLink />}
                  />
                  <LinkButton
                    text="Github"
                    link={it.github}
                    icon={<FaGithub />}
                  />
                </SlideLinkWrapper>
              </SlideHeader>
              <SlideInfoWrapper>
                <img
                  src={process.env.PUBLIC_URL + `/assets/${it.id}.png`}
                  alt={it.title}
                />
                <p>{it.summary}</p>
              </SlideInfoWrapper>
              <SkillListWrapper>
                <p>기술 스택</p>
                <SkillList>
                  {it.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </SkillList>
              </SkillListWrapper>
              <DetailButton onClick={() => openDetail(it.id)}>
                상세보기
              </DetailButton>
            </SlideWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
};

export default ProjectSwiper;
