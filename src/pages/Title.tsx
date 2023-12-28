/* eslint-disable no-undef */
import React from 'react';
import { Page, TitleText } from '../component/CommonStyle';
import styled from 'styled-components';

const TopTitle = styled.div`
  @keyframes slide-right {
    0% {
      transform: translateX(-600px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  margin-top: 100px;
  animation: slide-right 1.5s;
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
  @keyframes slide-left {
    0% {
      transform: translateX(600px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  animation: slide-left 1.5s;
`;

const Title = () => {
  return (
    <Page>
      <TopTitle>
        <TitleText>PORT</TitleText>
      </TopTitle>
      <MainTitle>
        <img src={process.env.PUBLIC_URL + '/assets/mimo1.png'} />
        <p>Frontend Developer</p>
        <p>기지원</p>
      </MainTitle>
      <BottomTitle>
        <TitleText>FOLIO</TitleText>
      </BottomTitle>
    </Page>
  );
};

export default Title;
