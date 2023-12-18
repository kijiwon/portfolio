import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import NavBar from './component/NavBar';

const Page = styled.div`
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <div>
      <NavBar />

      <Element name="section1" className="element">
        <Page>Section 1</Page>
      </Element>
      <Element name="section2" className="element">
        <Page>Section 2</Page>
      </Element>
      <Element name="section3" className="element">
        <Page>Section 3</Page>
      </Element>
    </div>
  );
};

export default App;
