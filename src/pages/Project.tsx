import React from 'react';
import styled from 'styled-components';
import { Page } from '../component/CommonStyle';
import ProjectSwiper from '../component/ProjectSwiper';
import { useState } from 'react';
import ProjectDetail from '../component/ProjectDetail';
import { COLOR } from '../style/theme';

const ProjectTitle = styled.h1`
  font-size: 44px;
  margin-top: 70px;
  margin-bottom: 50px;
`;

const ViewerButtonWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 50px;
`;

const ViewerButton = styled.button<{ active: boolean }>`
  width: 80px;
  height: 30px;
  font-size: 18px;
  font-family: 'Jua';
  border-radius: 10px 10px 0 0;
  border: none;
  text-align: center;
  margin-left: 5px;
  background-color: ${(props) =>
    props.active ? `${COLOR.bg_green}` : `${COLOR.hover_green}`};
  color: ${(props) => (props.active ? 'black' : `${COLOR.main_green}`)};

  cursor: pointer;
`;

const Project = () => {
  const [detail, setDetail] = useState(false);
  const [selectedId, setSelectedId] = useState('');

  const openDetail = (projectId: string) => {
    setDetail(true);
    setSelectedId(projectId);
  };

  return (
    <Page>
      <ProjectTitle>Project</ProjectTitle>
      <ViewerButtonWrapper>
        <ViewerButton active={!detail} onClick={() => setDetail(false)}>
          전체보기
        </ViewerButton>
        <ViewerButton active={detail} onClick={() => openDetail('tododiary')}>
          상세보기
        </ViewerButton>
      </ViewerButtonWrapper>
      {detail ? (
        <ProjectDetail selectedId={selectedId} />
      ) : (
        <ProjectSwiper openDetail={openDetail} />
      )}
    </Page>
  );
};

export default Project;
