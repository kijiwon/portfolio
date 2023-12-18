import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const NavBarComponent = styled.nav`
  position: fixed;
  right: 200px;
`;
const NavBar = () => {
  return (
    <NavBarComponent>
      <Link to="section1" spy={true} smooth={true} duration={500}>
        Section 1
      </Link>
      <Link to="section2" spy={true} smooth={true} duration={500}>
        Section 2
      </Link>
      <Link to="section3" spy={true} smooth={true} duration={500}>
        Section 3
      </Link>
    </NavBarComponent>
  );
};

export default NavBar;
