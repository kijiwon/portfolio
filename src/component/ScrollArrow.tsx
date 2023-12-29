import React from 'react';
import styled, { keyframes } from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { COLOR } from '../style/theme';

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
  opacity: 1;
  animation: ${upMotion} 1.5s ease-out 0s infinite;
`;

const DownArrowWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  opacity: 1;
  animation: ${downMotion} 1.5s ease-out 0s infinite;
`;

const ArrowIcon = styled.div`
  width: fit-content;
  height: 20px;
  font-size: 60px;
  color: ${COLOR.main_red};
`;

export const UpArrow = () => {
  return (
    <UpArrowWrapper>
      <ArrowIcon>
        <IoIosArrowUp />
      </ArrowIcon>
    </UpArrowWrapper>
  );
};
export const DownArrow = () => {
  return (
    <DownArrowWrapper>
      <ArrowIcon>
        <IoIosArrowDown />
      </ArrowIcon>
    </DownArrowWrapper>
  );
};
