/* eslint-disable no-undef */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { COLOR } from '../style/theme';
import { useRef } from 'react';
import { useEffect } from 'react';

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
  animation: ${upMotion} 2s ease-out 1.5s infinite;
`;

const DownArrowWrapper = styled.div`
  position: absolute;
  right: 48%;
  bottom: 60px;
  opacity: 0;
  animation: ${downMotion} 2s ease-out 1.5s infinite;
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
      threshold: 0.01,
    };

    const handleUpIntersection: IntersectionObserverCallback = (entries) => {
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
      upArrowObserver.disconnect();
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
      threshold: 0.01,
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

    const upArrowObserver = new IntersectionObserver(
      handleDownIntersection,
      options,
    );

    upArrowObserver.observe(downArrowRef.current!);

    return () => {
      upArrowObserver.disconnect();
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
