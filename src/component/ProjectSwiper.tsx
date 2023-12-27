/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { projectData } from '../data/projectData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';
import 'swiper/components/navigation/navigation.min.css';

import SwiperCore, { Navigation } from 'swiper';
import { COLOR } from '../style/theme';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';
import LinkButton from './LinkButton';

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
`;

const SlideWrapper = styled.article`
  width: 98%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLOR.bg_green};
  border-radius: 20px;
  margin-left: 5px;
  padding-top: 20px;
  padding-bottom: 20px;
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
`;

const SlideLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  /* margin-bottom: 10px; */
`;

const SlideImg = styled.img`
  width: 60%;
`;

const SlideDescription = styled.div`
  font-size: 20px;
`;

const SkillListWrapper = styled.div`
  width: 65%;
  p {
    width: fit-content;
    padding: 3px 5px;
    margin-bottom: 5px;
    font-size: 16px;
    color: ${COLOR.main_red};
    border: 1.5px solid ${COLOR.main_red};
    border-radius: 10px;
  }
`;

const SkillList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  overflow-y: scroll;
  padding-left: 10px;
  li {
    font-size: 13px;
    margin-left: 10px;
    word-break: keep-all;
    white-space: nowrap;
  }
`;

const DetailButton = styled.button`
  width: 60%;
  height: 30px;
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
`;

const ProjectSwiper = ({ openDetail }: ProjectProps) => {
  SwiperCore.use([Navigation]);

  return (
    <SwiperWrapper>
      <Swiper
        centeredSlides={false}
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        navigation
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
              <SlideImg
                src={process.env.PUBLIC_URL + `/assets/${it.id}.png`}
                alt={it.title}
              />
              <SlideDescription>{it.summary}</SlideDescription>
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
