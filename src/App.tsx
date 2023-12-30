import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { COLOR, SIZE } from './style/theme';
import NavBar from './component/NavBar';
import Title from './pages/Title';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

const AppComponent = styled.div`
  background-color: ${COLOR.bg};
  height: 100vh;
  overflow-y: scroll;

  @media screen and (max-width: ${SIZE.tablet}) {
    width: 100%;
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

  useEffect(() => {
    setScreenSize();
  });

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

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      const { deltaY } = e;
      const { current: pageRefCurrent } = pageRef;
      if (pageRefCurrent) {
        const { scrollTop } = pageRefCurrent;
        if (deltaY >= 0) {
          // 스크롤 내릴때
          if (scrollTop >= 0 && scrollTop < pageHeight) {
            pageRef.current?.scrollTo({
              top: pageHeight,
              left: 0,
              behavior: 'smooth',
            });
            setPageNum(2);
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
            pageRef.current?.scrollTo({
              top: pageHeight * 2,
              left: 0,
              behavior: 'smooth',
            });
            setPageNum(3);
          } else if (
            scrollTop >= pageHeight * 2 &&
            scrollTop < pageHeight * 3
          ) {
            pageRef.current?.scrollTo({
              top: pageHeight * 3,
              left: 0,
              behavior: 'smooth',
            });
            setPageNum(4);
          } else if (
            scrollTop >= pageHeight * 3 &&
            scrollTop < pageHeight * 4
          ) {
            pageRef.current?.scrollTo({
              top: pageHeight * 3,
              left: 0,
              behavior: 'smooth',
            });
            setPageNum(4);
          }
        } else if (deltaY < 0) {
          // 스크롤 올릴때
          if (scrollTop >= 0 && scrollTop < pageHeight) {
            pageRef.current?.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
            setPageNum(1);
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
            pageRef.current?.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
            setPageNum(1);
          } else if (
            scrollTop >= pageHeight * 2 &&
            scrollTop < pageHeight * 3
          ) {
            pageRef.current?.scrollTo({
              top: pageHeight,
              left: 0,
              behavior: 'smooth',
            });
            setPageNum(2);
          } else if (
            scrollTop >= pageHeight * 3 &&
            scrollTop < pageHeight * 4
          ) {
            pageRef.current?.scrollTo({
              top: pageHeight * 2,
              left: 0,
              behavior: 'smooth',
            });
            setPageNum(3);
          }
        }
      }
    };

    window.addEventListener('wheel', wheelHandler);

    return () => {
      window.removeEventListener('wheel', wheelHandler);
    };
  }, [pageRef]);

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
