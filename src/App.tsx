import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { COLOR, SIZE } from './style/theme';
import NavBar from './component/NavBar';
import Title from './pages/Title';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import useWheel from './hooks/useWheel';

const AppComponent = styled.div`
  background-color: ${COLOR.bg};
  height: 100vh;
  overflow-y: scroll;

  @media screen and (max-width: ${SIZE.tablet}) {
    width: 100%;
    overflow-x: hidden;
  }
`;

const App = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const [pageNum, setPageNum] = useState(1);
  const pageHeight = window.innerHeight;

  // 100vh시 모바일에서 하단 가려지는 문제 해결하기
  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  const onClickNav = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      pageRef.current?.scrollTo({
        top: section.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    }
    switch (sectionId) {
      case 'title':
        setPageNum(1);
        break;
      case 'about':
        setPageNum(2);
        break;
      case 'project':
        setPageNum(3);
        break;
      case 'contact':
        setPageNum(4);
        break;
      default:
        break;
    }
  };

  useWheel(pageRef, setPageNum, pageHeight);

  useEffect(() => {
    setScreenSize();
  });

  return (
    <AppComponent ref={pageRef}>
      <NavBar pageNum={pageNum} onClickNav={onClickNav} />
      <div id="title">
        <Title />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </AppComponent>
  );
};

export default App;
