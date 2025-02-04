import styled from 'styled-components';
import { COLOR, SIZE } from '../style/theme';

const ListWrapper = styled.ul`
  width: 60%;
  height: 100%;
  border-left: 3px solid ${COLOR.bg_green};
  background: rgba(255, 255, 255, 0.03);
  list-style: none;
  padding: 50px 20px 50px 30px;
  margin-left: 30px;

  @media screen and (max-width: ${SIZE.tablet}) {
    width: 100%;
    height: fit-content;
    border: none;
    padding: 0;
    margin: 0;
  }
`;

const ListItem = styled.li`
  position: relative;
  padding-bottom: 25px;
  margin-bottom: 60px;
  font-size: 18px;
  line-height: 1.3;

  &::before {
    content: attr(data-date);
    position: absolute;
    left: -120px;
    color: rgba(0, 0, 0, 0.7);
    text-align: right;
    font-size: 16px;
    white-space: pre-line;
  }

  &::after {
    content: '';
    position: absolute;
    left: -37px;
    top: 10px;
    width: 11px;
    height: 11px;
    background: ${COLOR.bg};
    border-radius: 50%;
    box-shadow: 0 0 0 3px ${COLOR.bg_green};
  }

  > h4 {
    margin-top: 10px;
    margin-bottom: 5px;
  }

  p {
    font-size: 12px;
    font-family: 'Nanum Gothic';
  }

  @media screen and (max-width: ${SIZE.tablet}) {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 12px;
    margin-bottom: 5px;

    &::before {
      position: relative;
      margin-right: 5px;
      text-align: start;
      left: 0;
      font-size: 12px;
    }
    &::after {
      display: none;
    }

    > h4 {
      margin: 0 5px 0;
    }

    p {
      display: none;
    }
  }
`;

export const EducationList = () => {
  return (
    <ListWrapper>
      <ListItem data-date={`2022.12\n-2023.06`}>
        <h4>코드스테이츠</h4>
        <p>JavaScript 기반의 프론트엔드 학습</p>
      </ListItem>
      <ListItem data-date={`2022.08\n-2022.09`}>
        <h4>스파르타 코딩클럽 웹개발 종합반</h4>
        <div>
          <p>JavaScript 기반의 프론트엔드 과정 학습</p>
          <p>Python 기반의 벡엔드 과정 학습</p>
        </div>
        <h4>스파르타 코딩클럽 SQL</h4>
        <p>SQL 문법 학습</p>
      </ListItem>
      <ListItem data-date={`2015.03\n-2020.02`}>
        <h4>단국대학교</h4>
        <p>신소재공학과 졸업</p>
      </ListItem>
    </ListWrapper>
  );
};
