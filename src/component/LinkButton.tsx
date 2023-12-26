/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../style/theme';
import { ReactNode } from 'react';

interface Props {
  text: string;
  link: string;
  icon?: ReactNode;
}

const LinkButtonComponent = styled.button`
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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

const LinkButton = ({ text, link, icon }: Props) => {
  const onClickButton = () => {
    if (link !== '') {
      window.open(link);
    }
  };
  return (
    <LinkButtonComponent onClick={onClickButton}>
      {text}
      {icon}
    </LinkButtonComponent>
  );
};

export default LinkButton;
