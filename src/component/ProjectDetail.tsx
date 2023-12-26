import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../style/theme';

const DetailWrapper = styled.div`
  width: 80%;
  border: 2px solid ${COLOR.main_red};
`;

const ProjectDetail = () => {
  return <DetailWrapper>projectdetail</DetailWrapper>;
};

export default ProjectDetail;
