import React, { useState, useEffect } from 'react';
import { Link, Events } from 'react-scroll';
import styled from 'styled-components';
import { COLOR } from '../style/theme';

const NavBarComponent = styled.nav`
  position: fixed;
  right: 0px;
  top: 10px;
  z-index: 100000000;
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
  const [activeElement, setActiveElement] = useState<string>('title');

  const handleSetActive = (to: string) => {
    setActiveElement(to);
  };

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {
      console.log('begin', activeElement);
    });

    Events.scrollEvent.register('end', () => {
      console.log('end', activeElement);
    });

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, [activeElement]);

  return (
    <NavBarComponent>
      <Link
        to="title"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onSetActive={() => handleSetActive('title')}
      >
        <LinkButton className={activeElement === 'title' ? 'active' : ''}>
          Portfolio
        </LinkButton>
      </Link>
      <Link
        to="about"
        activeClass="active"
        spy={true}
        smooth={true}
        duration={500}
        onSetActive={() => handleSetActive('about')}
      >
        <LinkButton className={activeElement === 'about' ? 'active' : ''}>
          About
        </LinkButton>
      </Link>
      <Link
        to="project"
        activeClass="active"
        spy={true}
        smooth={true}
        duration={500}
        onSetActive={() => handleSetActive('project')}
      >
        <LinkButton className={activeElement === 'project' ? 'active' : ''}>
          Project
        </LinkButton>
      </Link>
      <Link
        to="contact"
        activeClass="active"
        spy={true}
        smooth={true}
        duration={500}
        onSetActive={() => handleSetActive('contact')}
      >
        <LinkButton className={activeElement === 'contact' ? 'active' : ''}>
          Contact
        </LinkButton>
      </Link>
    </NavBarComponent>
  );
};

export default NavBar;
