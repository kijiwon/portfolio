/* eslint-disable no-undef */
import React, { useRef, useEffect } from 'react';
import { Page, TitleText } from '../component/CommonStyle';
import styled from 'styled-components';

const TopTitle = styled.div`
  margin-top: 100px;
  margin-left: -1200px;
  transition: margin-left 0.5s ease-in;
`;

const MainTitle = styled.div`
  height: 240px;
  margin-top: 10px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 230px;
    margin-bottom: 10px;
  }

  p {
    font-size: 30px;
    &:last-child {
      margin-top: 10px;
    }
  }
`;

const BottomTitle = styled.div`
  margin-left: 1200px;
  transition: margin-left 0.5s ease-in;
`;

const Title = () => {
  const topTitleRef = useRef<HTMLDivElement | null>(null);
  const bottomTitleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.05,
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

    const topObserver = new IntersectionObserver(
      handleLeftIntersection,
      options,
    );
    topObserver.observe(topTitleRef.current!);

    return () => {
      topObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.05,
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

    const bottomObserver = new IntersectionObserver(
      handleRightIntersection,
      options,
    );

    bottomObserver.observe(bottomTitleRef.current!);
    return () => {
      bottomObserver.disconnect();
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
    </Page>
  );
};

export default Title;
