import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import styled from 'styled-components';
import { COLOR, SIZE } from '../../style/theme';
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
  height: 100vh;
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

  @media screen and (max-width: ${SIZE.tablet}) {
    width: 90%;
    .swiper-pagination {
      top: 80px;
      right: 10px;
    }
  }
`;

const DetailSlideWrapper = styled.div`
  width: 97%;
  height: 450px;
  display: flex;
  flex-direction: row;

  align-items: start;
  margin-left: 30px;
  background-color: ${COLOR.bg_green};
  border-radius: 20px;
  padding: 30px;

  @media screen and (max-width: ${SIZE.tablet}) {
    width: 100%;
    height: 680px;
    flex-direction: column;
    align-items: center;
    margin-left: 0;
  }
`;

const SlideLeft = styled.div`
  width: 360px;
  margin-right: 30px;

  @media screen and (max-width: ${SIZE.tablet}) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 12px;
  }
`;

const SlideRight = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: ${SIZE.tablet}) {
    width: 100%;
  }
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
  div {
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: ${SIZE.tablet}) {
    flex-direction: column;
    margin-bottom: 10px;
    span {
      font-size: 14px;
    }
    h2 {
      font-size: 18px;
    }
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

  @media screen and (max-width: ${SIZE.tablet}) {
    p {
      &:first-child {
        font-size: 14px;
      }
    }

    img {
      width: 200px;
    }
  }
`;

const TechWrapper = styled.div`
  margin-top: 10px;
  width: 340px;

  @media screen and (max-width: ${SIZE.tablet}) {
    width: 100%;
    margin-top: 20px;
  }
`;

const DetailListTitle = styled.p`
  width: fit-content;
  font-size: 18px;
  padding: 0 3px;
  border-bottom: 2px solid ${COLOR.main_red};
  margin-bottom: 15px;
  @media screen and (max-width: ${SIZE.tablet}) {
    font-size: 15px;
    margin-bottom: 10px;
  }
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

  @media screen and (max-width: ${SIZE.tablet}) {
    background-color: ${COLOR.bg};
    border-radius: 10px;
    padding: 5px 3px 2px 5px;
    li {
      font-family: 'Nanum Gothic';
      font-size: 12px;
      margin-bottom: 7px;
      margin-right: 8px;
      :last-child {
        margin-right: 0;
      }
    }
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

  @media screen and (max-width: ${SIZE.tablet}) {
    list-style: decimal;
    width: 100%;
    height: 80px;
    border-radius: 10px;
    padding: 10px 3px 0px 30px;
    li {
      font-family: 'Nanum Gothic';
      font-size: 11px;
      & :last-child {
        margin-bottom: 0px;
      }
    }
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

  @media screen and (max-width: ${SIZE.tablet}) {
    div {
      height: 130px;
      font-size: 13px;
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
        spaceBetween={10}
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
                  <div>
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
                  </div>
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
