import React from 'react';
import styled from 'styled-components';
import NavBar from './component/NavBar';
import { COLOR } from './style/theme';
import Title from './pages/Title';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import { Element } from 'react-scroll';

const AppComponent = styled.div`
  background-color: ${COLOR.bg};
`;

const App = () => {
  return (
    <AppComponent>
      <NavBar />
      <Element name="title" className="element" id="title">
        <Title />
      </Element>
      <Element name="about" className="element" id="about">
        <About />
      </Element>
      <Element name="project" className="element" id="project">
        <Project />
      </Element>
      <Element name="contact" className="element" id="contact">
        <Contact />
      </Element>
    </AppComponent>
  );
};

export default App;
