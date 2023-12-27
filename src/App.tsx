import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import NavBar from './component/NavBar';
import { COLOR } from './style/theme';
import Title from './pages/Title';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

const AppComponent = styled.div`
  background-color: ${COLOR.bg};
`;

const App = () => {
  return (
    <AppComponent>
      <NavBar />
      <Element name="title" className="element">
        <Title />
      </Element>
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="project" className="element">
        <Project />
      </Element>
      <Element name="contact" className="element">
        <Contact />
      </Element>
    </AppComponent>
  );
};

export default App;
