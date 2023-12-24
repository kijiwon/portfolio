/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import { Page } from '../component/CommonStyle';
import { MdAlternateEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';
import { FaBlogger } from 'react-icons/fa';
import { COLOR } from '../style/theme';
import LinkButton from '../component/LinkButton';

const AboutTitle = styled.h1`
  font-size: 44px;
  margin-top: 70px;
  margin-bottom: 70px;
`;

const AboutMainContent = styled.div`
  width: 70vw;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PrivacyWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 22px;

  margin-top: 20px;
  margin-bottom: 30px;
  h2 {
    margin-bottom: 8px;
  }
`;

const ImgWrapper = styled.article`
  width: fit-content;
  border: 2px solid ${COLOR.main_red};
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 180px;
  }
`;

const LinkWrapper = styled.article`
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 2.5px solid ${COLOR.main_red};
  padding-left: 8px;
`;

const LinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  font-size: 16px;

  p {
    margin-right: 5px;
  }
`;

const IntroduceWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContextWrapper = styled.article`
  width: 700px;
  min-height: 160px;
  border: 1.5px solid ${COLOR.main_red};
  border-radius: 20px;
  padding: 15px 10px 20px 20px;

  h3 {
    font-size: 22px;
    margin-bottom: 10px;
  }
  p {
    font-size: 15px;
    font-weight: 600;
    font-family: 'Nanum Gothic';
    line-height: 1.4;
    letter-spacing: 1px;
    word-break: keep-all;
    padding-left: 10px;
  }
`;

const SkillList = styled.ul`
  list-style: disc;
  padding-left: 10px;
  h4 {
    font-size: 16px;
    margin-bottom: 10px;
  }
  img {
    margin-right: 5px;
    margin-bottom: 5px;
  }
`;

const About = () => {
  return (
    <Page>
      <AboutTitle>ABOUT</AboutTitle>
      <AboutMainContent>
        <PrivacyWrapper>
          <ImgWrapper>
            <img src={process.env.PUBLIC_URL + '/assets/mimo1.png'} />
          </ImgWrapper>
          <ProfileWrapper>
            <h2>프론트엔드 개발자</h2>
            <p>기지원</p>
          </ProfileWrapper>
          <LinkWrapper>
            <LinkDiv>
              <MdAlternateEmail />
              <p>이메일:</p>
              <p>kiji1313@gmail.com</p>
            </LinkDiv>
            <LinkDiv>
              <FaGithub />
              <p>깃헙:</p>
              <LinkButton
                text="Github으로 이동하기 >"
                link="https://github.com/kijiwon"
              />
            </LinkDiv>
            <LinkDiv>
              <SiNotion />
              <p>노션:</p>
              <LinkButton
                text="Notion으로 이동하기 >"
                link="https://www.notion.so/PROJECT-b417b515af524f0b807c376e3f5dadd0?pvs=4"
              />
            </LinkDiv>
            <LinkDiv>
              <FaBlogger />
              <p>블로그:</p>
              <LinkButton
                text="Blog로 이동하기 >"
                link="https://princesskiji.tistory.com/"
              />
            </LinkDiv>
          </LinkWrapper>
        </PrivacyWrapper>
        <IntroduceWrapper>
          <ContextWrapper>
            <h3>Introduce</h3>
            <p>
              React기반의 개발자로, 반응형 웹앱을 통해 사용자 경험을 개선하는데
              중점을 둔 개발을 주로 하고 있습니다.
            </p>
            <p>
              상상한 것을 실제로 구현한다는 데에 매력을 느껴 개발자의 길을
              걸어가고 있습니다.
              <br />
              현재는 프론트엔드 개발자에 주력하고 있지만, 이전에 백엔드에 대한
              강의를 맛보기로 들어본 경험이 있어 후에 백엔드에 대해서도 깊이
              탐구해 풀스택 개발자로서의 성장을 꿈꾸고 있습니다.
            </p>
          </ContextWrapper>
          <ContextWrapper>
            <h3>Skills</h3>
            <SkillList>
              <li>
                <h4>Frontend</h4>
                <img src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white" />
                <img src="https://img.shields.io/badge/css3-1572B6?style=flat-square&logo=css3&logoColor=white" />
                <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white" />
                <img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=white" />
                <img src="https://img.shields.io/badge/redux toolkit-764ABC?style=flat-square&logo=redux&logoColor=white" />
                <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styledcomponents&logoColor=white" />
                <img src="https://img.shields.io/badge/axios-5A29E4?style=flat-square&logo=axios&logoColor=white" />
                <img src="https://img.shields.io/badge/eslint-4B32C3?style=flat-square&logo=eslint&logoColor=white" />
                <img src="https://img.shields.io/badge/prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white" />
              </li>
              <li>
                <h4>Etc</h4>
                <img src="https://img.shields.io/badge/amazons3-569A31?style=flat-square&logo=amazons3&logoColor=white" />
                <img src="https://img.shields.io/badge/firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white" />
                <img src="https://img.shields.io/badge/github-181717?style=flat-square&logo=github&logoColor=white" />
                <img src="https://img.shields.io/badge/figma-F24E1E?style=flat-square&logo=figma&logoColor=white" />
                <img src="https://img.shields.io/badge/notion-000000?style=flat-square&logo=notion&logoColor=white" />
              </li>
            </SkillList>
          </ContextWrapper>
        </IntroduceWrapper>
      </AboutMainContent>
    </Page>
  );
};

export default About;
