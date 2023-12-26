import React from 'react';
import styled from 'styled-components';
import { Page } from '../component/CommonStyle';
import ProjectSwiper from '../component/ProjectSwiper';
import { useState } from 'react';
import ProjectDetail from '../component/ProjectDetail';

const ProjectTitle = styled.h1`
  font-size: 44px;
  margin-top: 70px;
  margin-bottom: 70px;
`;
const Project = () => {
  const [detail, setDetail] = useState(false);

  const openDetail = () => {
    setDetail(true);
  };

  return (
    <Page>
      <ProjectTitle>Project</ProjectTitle>
      <button onClick={openDetail}>상세보기</button>
      <button onClick={() => setDetail(false)}>전체보기</button>
      {detail ? <ProjectDetail /> : <ProjectSwiper openDetail={openDetail} />}
    </Page>
  );
};

export default Project;
