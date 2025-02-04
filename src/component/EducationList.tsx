import styled from 'styled-components';
import { COLOR } from '../style/theme';

const ListWrapper = styled.ul`
  height: 100%;
  border-left: 4px solid #4298c3;
  /* border-right: 3px dashed ${COLOR.main_red}; */
  background: rgba(255, 255, 255, 0.03);
  list-style: none;
  padding: 50px 20px 50px 30px;
  margin-left: 30px;
  margin-right: 20px;
`;

const ListItem = styled.li`
  position: relative;
  padding-bottom: 25px;
  margin-bottom: 80px;
  font-size: 18px;
  line-height: 1.3;

  &:last-of-type {
    border: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  &::before {
    content: attr(data-date);
    position: absolute;
    left: -180px;
    color: rgba(0, 0, 0, 0.7);
    text-align: right;
    font-weight: 100;
    font-size: 0.9em;
    min-width: 120px;
    white-space: pre-line;
  }

  &::after {
    content: '';
    position: absolute;
    left: -38px;
    top: 10px;
    width: 11px;
    height: 11px;
    background: ${COLOR.bg};
    border-radius: 50%;
    box-shadow: 0 0 0 4px #4298c3;
  }

  p {
    font-size: 12px;
  }
`;

export const EducationList = () => {
  return (
    <ListWrapper>
      <ListItem data-date={`2022.12\n-2023.06`}>
        <h4>코드스테이츠</h4>
        <p>javascript 기반의 react 학습</p>
      </ListItem>
      <ListItem data-date={`2022.08\n-2022.09`}>
        <h4>
          스파르타 코딩클럽 <br />
          웹개발 종합반
        </h4>
      </ListItem>
      <ListItem data-date={`2015.03\n-2020.02`}>
        <h4>단국대학교</h4>
      </ListItem>
    </ListWrapper>
  );
};
