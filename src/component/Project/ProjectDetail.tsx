import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import styled from 'styled-components';
import { COLOR } from '../../style/theme';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import LinkButton from '../LinkButton';
import { FaLink } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { projectData } from '../../data/projectData';

SwiperCore.use([Pagination]);

interface SlideProps {
  selectedId: string;
}

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
    top: 100px;
    right: 18px;
    transform: translateY(-100%);
    z-index: 1000;
  }
  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
  }
  .swiper-pagination-bullet-active {
    width: 14px;
    height: 14px;

    background-color: ${COLOR.main_green};
  }
`;

const DetailSlideWrapper = styled.div`
  width: 97%;
  height: 450px !important;
  display: flex;
  flex-direction: row;

  align-items: start;
  margin-left: 30px;
  background-color: ${COLOR.bg_green};
  border-radius: 20px;
  padding: 30px;
`;

const SlideLeft = styled.div`
  width: 360px;
  margin-right: 30px;
`;

const SlideRight = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const DetailSlideHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  span {
    color: ${COLOR.main_green};
    font-size: 18px;
    margin-right: 5px;
  }
  h2 {
    font-size: 24px;
    margin-right: 10px;
  }
`;

const DetailInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  p:first-child {
    margin-bottom: 10px;
    font-size: 18px;
  }
  img {
    width: 340px;
    margin-bottom: 10px;
  }
`;

const TechWrapper = styled.div`
  margin-top: 30px;
  width: 340px;
`;

const DetailListTitle = styled.p`
  width: fit-content;
  font-size: 18px;
  padding: 0 3px;
  border-bottom: 2px solid ${COLOR.main_red};
  margin-bottom: 15px;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;

  li {
    font-size: 15px;
    margin-left: 5px;
    white-space: nowrap;
    margin-bottom: 5px;
  }
`;

const RoleList = styled.ul`
  height: 120px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 16px 10px 10px 35px;
  list-style: decimal;
  background-color: ${COLOR.bg};
  border-radius: 20px;
  li {
    font-size: 16px;
    margin-bottom: 5px;
    letter-spacing: 1.5px;
  }
`;

const DetailDescription = styled.div`
  display: flex;
  flex-direction: column;
  div {
    height: 150px;
    background-color: ${COLOR.bg};
    font-size: 13px;
    line-height: 1.5;
    letter-spacing: 1.5px;
    white-space: pre-line;
    font-family: 'Nanum Gothic';
    border-radius: 20px;
    padding: 10px 10px 10px 20px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 10px;
      height: auto;
    }
    &::-webkit-scrollbar-thumb {
      background: ${COLOR.hover_green};
      border-radius: 10px;
    }
  }
`;

const ProjectDetail = ({ selectedId }: SlideProps) => {
  const selectedSlide = (selectedId: string) => {
    return projectData.findIndex((it) => it.id === selectedId);
  };

  return (
    <DetailWrapper>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        allowTouchMove={false}
        pagination={{
          clickable: true,
        }}
        initialSlide={selectedSlide(selectedId)}
      >
        {projectData.map((it) => (
          <SwiperSlide key={it.id}>
            <DetailSlideWrapper>
              <SlideLeft>
                <DetailSlideHeader>
                  <h2>
                    <span>[{it.project}]</span>
                    {it.title}
                  </h2>
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
                </DetailSlideHeader>
                <DetailInfo>
                  <p>프로젝트 기간: {it.duration}</p>
                  <img
                    src={process.env.PUBLIC_URL + `/assets/${it.id}.png`}
                    alt={it.title}
                  />
                  <p>{it.summary}</p>
                  <TechWrapper>
                    <DetailListTitle>기술 스택</DetailListTitle>
                    <TechList>
                      {it.skills.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                      ))}
                    </TechList>
                  </TechWrapper>
                </DetailInfo>
              </SlideLeft>
              <SlideRight>
                <div>
                  <DetailListTitle>구현 기능</DetailListTitle>
                  <RoleList>
                    {it.role.map((fnc, idx) => (
                      <li key={idx}>{fnc}</li>
                    ))}
                  </RoleList>
                </div>
                <DetailDescription>
                  <DetailListTitle>프로젝트 소개</DetailListTitle>
                  <div>
                    <p>{it.description}</p>
                  </div>
                </DetailDescription>
              </SlideRight>
            </DetailSlideWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </DetailWrapper>
  );
};

export default ProjectDetail;
