/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../style/theme';

interface NavBarProps {
  pageNum: number;
  onClickNav: (sectionId: string) => void;
}

const NavBarComponent = styled.nav`
  width: fit-content;
  height: 150px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  right: 10px;
  top: 30%;
  z-index: 100000000;
`;

const LinkButton = styled.button`
  width: 12px;
  height: 12px;
  font-size: 0px;
  border: none;
  border-radius: 25px;
  background-color: ${COLOR.main_red};
  cursor: pointer;

  &:hover {
    width: 80px;
    height: 28px;
    font-size: 14px;
    font-family: 'Jua';
    border: 1.5px solid ${COLOR.main_red};
    border-radius: 15px;
    background-color: ${COLOR.bg};
    color: ${COLOR.main_red};
  }

  &.active {
    width: 80px;
    height: 28px;
    font-size: 14px;
    font-family: 'Jua';
    border-radius: 15px;
    background-color: ${COLOR.main_red};
    color: ${COLOR.bg};
  }
`;

const NavBar = ({ pageNum, onClickNav }: NavBarProps) => {
  return (
    <NavBarComponent>
      <LinkButton
        className={pageNum === 1 ? 'active' : ''}
        onClick={() => onClickNav('title')}
      >
        Portfolio
      </LinkButton>
      <LinkButton
        className={pageNum === 2 ? 'active' : ''}
        onClick={() => onClickNav('about')}
      >
        About
      </LinkButton>
      <LinkButton
        onClick={() => onClickNav('project')}
        className={pageNum === 3 ? 'active' : ''}
      >
        Project
      </LinkButton>
      <LinkButton
        onClick={() => onClickNav('contact')}
        className={pageNum === 4 ? 'active' : ''}
      >
        Contact
      </LinkButton>
    </NavBarComponent>
  );
};

export default NavBar;
