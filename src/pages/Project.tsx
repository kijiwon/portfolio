import { useState } from 'react';
import styled from 'styled-components';
import { COLOR, SIZE } from '../style/theme';
import { Page } from '../component/CommonStyle';
import ProjectSwiper from '../component/Project/ProjectSwiper';
import ProjectDetail from '../component/Project/ProjectDetail';
import { DownArrow, UpArrow } from '../component/ScrollArrow';
import { projectData } from '../data/projectData';

interface ViewerProps {
  active: boolean;
}

const ProjectTitle = styled.h1`
  font-size: 44px;
  margin-top: 70px;
  margin-bottom: 30px;
  @media screen and (max-width: ${SIZE.tablet}) {
    display: none;
  }
`;

const ViewerButtonWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 50px;

  @media screen and (max-width: ${SIZE.tablet}) {
    width: 90%;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    margin-right: 0px;
    margin-bottom: 10px;
    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const ViewerButton = styled.button<ViewerProps>`
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

  @media screen and (max-width: ${SIZE.tablet}) {
    width: ${(props) => (props.active ? '70%' : '30%')};
    height: 35px;
    border-radius: 10px;
    margin-left: 10px;
    box-shadow: ${(props) =>
      props.active && `0px 2px 3px 2px ${COLOR.hover_green}`};
  }
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
      <UpArrow />
      <ProjectTitle>PROJECT</ProjectTitle>
      <ViewerButtonWrapper>
        <div>
          <ViewerButton active={!detail} onClick={() => setDetail(false)}>
            전체보기
          </ViewerButton>
          <ViewerButton
            active={detail}
            onClick={() => openDetail(projectData[0].id)}
          >
            상세보기
          </ViewerButton>
        </div>
      </ViewerButtonWrapper>
      {detail ? (
        <ProjectDetail selectedId={selectedId} />
      ) : (
        <ProjectSwiper openDetail={openDetail} />
      )}
      <DownArrow />
    </Page>
  );
};

export default Project;
