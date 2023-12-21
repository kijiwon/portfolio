import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import NavBar from './component/NavBar';
import { COLOR } from './style/theme';
import Title from './pages/Title';
import About from './pages/About';

const AppComponent = styled.div`
  background-color: ${COLOR.bg};
`;

const Page = styled.div`
  height: 100vh;
  font-family: 'Jua';
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
        <Page>프로젝트</Page>
      </Element>
    </AppComponent>
  );
};

export default App;
