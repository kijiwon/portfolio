import { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { COLOR, SIZE } from '../style/theme';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';

const upMotion = keyframes`

  25%{
    opacity: 1;
  }
  50%{
    opacity: 1;
    transform: translateY(-15px);
  }
  100%{
    opacity: 0;
    transform: translateY(-25px);
  }
`;

const downMotion = keyframes`

 25%{
    opacity: 1;
  }
  50%{
    opacity: 1;
    transform: translateY(15px);
  }
  100%{
    opacity: 0;
    transform: translateY(25px);
  }
`;

const UpArrowWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 48%;
  opacity: 0;
  animation: ${upMotion} 1.5s ease-out 1.5s infinite;

  @media screen and (max-width: ${SIZE.tablet}) {
    display: none;
  }
`;

const DownArrowWrapper = styled.div`
  position: absolute;
  right: 48%;
  bottom: 60px;
  opacity: 0;
  animation: ${downMotion} 1.5s ease-out 1.5s infinite;
  @media screen and (max-width: ${SIZE.tablet}) {
    display: none;
  }
`;

const ArrowIcon = styled.div`
  width: fit-content;
  height: 20px;
  font-size: 60px;
  color: ${COLOR.main_red};
`;

export const UpArrow = () => {
  const upArrowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleUpIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && upArrowRef.current) {
          upArrowRef.current.style.animationPlayState = 'running';
        } else {
          upArrowRef.current!.style.animationPlayState = 'paused';
        }
      });
    };

    const upArrowObserver = new IntersectionObserver(
      handleUpIntersection,
      options,
    );

    upArrowObserver.observe(upArrowRef.current!);

    return () => {
      upArrowObserver.unobserve(upArrowRef.current!);
    };
  }, []);

  return (
    <UpArrowWrapper ref={upArrowRef}>
      <ArrowIcon>
        <IoIosArrowUp />
      </ArrowIcon>
    </UpArrowWrapper>
  );
};

export const DownArrow = () => {
  const downArrowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleDownIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && downArrowRef.current) {
          downArrowRef.current.style.animationPlayState = 'running';
        } else {
          downArrowRef.current!.style.animationPlayState = 'paused';
        }
      });
    };

    const downArrowObserver = new IntersectionObserver(
      handleDownIntersection,
      options,
    );

    downArrowObserver.observe(downArrowRef.current!);

    return () => {
      downArrowObserver.unobserve(downArrowRef.current!);
    };
  }, []);
  return (
    <DownArrowWrapper ref={downArrowRef}>
      <ArrowIcon>
        <IoIosArrowDown />
      </ArrowIcon>
    </DownArrowWrapper>
  );
};
