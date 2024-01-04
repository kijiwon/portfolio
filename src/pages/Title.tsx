/* eslint-disable no-undef */
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { SIZE } from '../style/theme';
import { Page, TitleText } from '../component/CommonStyle';
import { DownArrow } from '../component/ScrollArrow';

const TopTitle = styled.div`
  margin-top: 80px;
  margin-left: -1200px;
  transition: margin-left 0.6s ease-in;

  @media screen and (max-width: ${SIZE.tablet}) {
    margin-top: 100px;
  }
`;

const MainTitle = styled.div`
  height: 240px;
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 250px;
    margin-bottom: 10px;
  }

  p {
    font-size: 30px;
    &:last-child {
      margin-top: 14px;
      font-size: 34px;
      letter-spacing: 10px;
    }
  }

  @media screen and (max-width: ${SIZE.tablet}) {
    margin-top: 40px;
    margin-bottom: 70px;
  }
`;

const BottomTitle = styled.div`
  margin-left: 1200px;
  transition: margin-left 0.6s ease-in;
`;

const Title = () => {
  const topTitleRef = useRef<HTMLDivElement | null>(null);
  const bottomTitleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleLeftIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && topTitleRef.current) {
          topTitleRef.current.style.marginLeft = '0px';
        } else {
          topTitleRef.current!.style.marginLeft = '-600px';
        }
      });
    };

    const handleRightIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && bottomTitleRef.current) {
          bottomTitleRef.current.style.marginLeft = '0px';
        } else {
          bottomTitleRef.current!.style.marginLeft = '600px';
        }
      });
    };

    const topObserver = new IntersectionObserver(
      handleLeftIntersection,
      options,
    );

    const bottomObserver = new IntersectionObserver(
      handleRightIntersection,
      options,
    );

    topObserver.observe(topTitleRef.current!);
    bottomObserver.observe(bottomTitleRef.current!);

    return () => {
      topObserver.unobserve(topTitleRef.current!);
      bottomObserver.unobserve(bottomTitleRef.current!);
    };
  }, []);

  return (
    <Page>
      <TopTitle ref={topTitleRef}>
        <TitleText>PORT</TitleText>
      </TopTitle>
      <MainTitle>
        <img src={process.env.PUBLIC_URL + '/assets/mimo1.png'} alt="Mimo" />
        <p>프론트엔드 개발자</p>
        <p>기지원</p>
      </MainTitle>
      <BottomTitle ref={bottomTitleRef}>
        <TitleText>FOLIO</TitleText>
      </BottomTitle>
      <DownArrow />
    </Page>
  );
};

export default Title;
