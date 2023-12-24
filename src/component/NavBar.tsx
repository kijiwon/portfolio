import React, { useState, useEffect } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';
import styled from 'styled-components';
import { COLOR } from '../style/theme';

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
  background-color: ${COLOR.bg};
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${COLOR.main_red};
    color: ${COLOR.bg};
  }

  &.active {
    background-color: ${COLOR.main_red};
    color: ${COLOR.bg};
  }
`;

const NavBar = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleSetActive = (to: string) => {
    setActiveLink(to);
  };

  const handleScroll = () => {
    scrollSpy.update();
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
      <Link
        to="title"
        spy={true}
        smooth={true}
        duration={500}
        onSetActive={() => handleSetActive('title')}
      >
        <LinkButton className={activeLink === 'title' ? 'active' : ''}>
          Portfolio
        </LinkButton>
      </Link>
      <Link
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        onSetActive={() => handleSetActive('about')}
      >
        <LinkButton className={activeLink === 'about' ? 'active' : ''}>
          About
        </LinkButton>
      </Link>
      <Link
        to="project"
        spy={true}
        smooth={true}
        duration={500}
        onSetActive={() => handleSetActive('project')}
      >
        <LinkButton className={activeLink === 'project' ? 'active' : ''}>
          Project
        </LinkButton>
      </Link>
    </NavBarComponent>
  );
};

export default NavBar;
