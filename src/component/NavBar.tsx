import styled from 'styled-components';
import { COLOR, SIZE } from '../style/theme';

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

  @media screen and (max-width: ${SIZE.tablet}) {
    width: 95%;
    height: 30px;
    flex-direction: row;
    justify-content: space-around;

    top: 15px;
  }
`;

const LinkButton = styled.button`
  width: 8px;
  height: 12px;
  font-size: 0px;
  border: none;
  border-radius: 50%;
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

  @media screen and (max-width: ${SIZE.tablet}) {
    width: 80px;
    height: 28px;
    font-size: 14px;
    font-family: 'Jua';
    border: 1.5px solid ${COLOR.main_red};
    border-radius: 15px;
    background-color: ${COLOR.bg};
    color: ${COLOR.main_red};

    &:hover,
    &.active {
      width: 80px;
      height: 28px;
      font-size: 14px;
      font-family: 'Jua';
      border-radius: 15px;
      background-color: ${COLOR.main_red};
      color: ${COLOR.bg};
    }
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
