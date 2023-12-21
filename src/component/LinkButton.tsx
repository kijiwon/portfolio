/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../style/theme';

interface Props {
  text: string;
  link: string;
}

const LinkButtonComponent = styled.button`
  height: 25px;
  font-size: 16px;
  font-family: 'Jua';
  text-align: center;
  background-color: inherit;
  border: none;
  color: ${COLOR.main_green};
  cursor: pointer;

  &:hover {
    color: ${COLOR.hover_green};
  }
`;

const LinkButton = ({ text, link }: Props) => {
  const onClickButton = () => {
    if (link !== '') {
      window.open(link);
    }
  };
  return (
    <LinkButtonComponent onClick={onClickButton}>{text}</LinkButtonComponent>
  );
};

export default LinkButton;
