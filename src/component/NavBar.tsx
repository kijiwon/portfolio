import React from 'react';
import { Link, Events } from 'react-scroll';
import styled from 'styled-components';
import { COLOR } from '../style/theme';
import { useEffect } from 'react';

const NavBarComponent = styled.nav`
  position: fixed;
  right: 0px;
  top: 10px;
`;

const LinkButton = styled.button`
  width: 80px;
  height: 28px;
  font-size: 14px;
  font-family: 'Jua';
  border: 1.5px solid ${COLOR.main_red};
  border-radius: 15px;
  background-color: inherit;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${COLOR.main_red};
    color: ${COLOR.bg};
  }
`;

const NavBar = () => {
  const handleScroll = () => {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  };

  useEffect(() => {
    Events.scrollEvent.register('begin', handleScroll);
    Events.scrollEvent.register('end', handleScroll);

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <NavBarComponent>
      <Link to="title" spy={true} smooth={true} duration={500}>
        <LinkButton>Portfolio</LinkButton>
      </Link>
      <Link to="about" spy={true} smooth={true} duration={500}>
        <LinkButton>About</LinkButton>
      </Link>
      <Link to="project" spy={true} smooth={true} duration={500}>
        <LinkButton>Project</LinkButton>
      </Link>
    </NavBarComponent>
  );
};

export default NavBar;
