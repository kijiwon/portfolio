/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import { COLOR, SIZE } from '../style/theme';
import { Page } from '../component/CommonStyle';
import { FaGithub } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';
import { FaBlogger } from 'react-icons/fa';
import LinkButton from '../component/LinkButton';
import { DownArrow, UpArrow } from '../component/ScrollArrow';
import { SkillData } from '../data/skillData';

const AboutTitle = styled.h1`
  font-size: 44px;
  margin-top: 70px;
  margin-bottom: 50px;

  @media screen and (max-width: ${SIZE.tablet}) {
    display: none;
  }
`;

const AboutMainContent = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: ${SIZE.tablet}) {
    width: 90%;
    margin-top: 50px;
    flex-direction: column;
    justify-content: start;
  }
`;

const PrivacyWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 220px;
    border: 3px double ${COLOR.main_red};
    border-radius: 50% 50% 0 0;
    background-color: ${COLOR.bg_green};
  }
  @media screen and (max-width: ${SIZE.tablet}) {
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 10px;
    border-bottom: 6px dashed ${COLOR.hover_green};
    img {
      width: 100px;
      border-radius: 50%;
    }
  }
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

  @media screen and (max-width: ${SIZE.tablet}) {
    font-size: 16px;
    margin-top: 10px;

    p {
      font-size: 20px;
    }
  }
`;

const LinkWrapper = styled.article`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 2.5px solid ${COLOR.main_red};
  padding-left: 8px;

  @media screen and (max-width: ${SIZE.tablet}) {
    border: none;
    height: 60%;
  }
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

  @media screen and (max-width: ${SIZE.tablet}) {
    font-size: 18px;
    p {
      margin-left: 3px;
      margin-right: 0;
    }
  }
`;

const IntroduceWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 100px;
  @media screen and (max-width: ${SIZE.tablet}) {
    height: 70%;
    justify-content: start;
    align-items: center;
    margin-left: 0;
  }
`;

const ContextWrapper = styled.article`
  min-height: 160px;
  border: 1.5px solid ${COLOR.main_red};
  border-radius: 20px;
  padding: 15px 10px 20px 20px;

  h3 {
    font-size: 22px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: ${SIZE.tablet}) {
    width: 100%;
    height: 45%;
    border: none;
    padding: 10px;

    h3 {
      font-size: 20px;
    }
  }
`;

const IntroduceContext = styled.div`
  p {
    font-size: 15px;
    font-weight: 600;
    font-family: 'Nanum Gothic';
    line-height: 1.4;
    letter-spacing: 1px;
    word-break: keep-all;
    padding-left: 10px;
  }

  @media screen and (max-width: ${SIZE.tablet}) {
    border: 1.5px solid ${COLOR.main_red};
    border-radius: 20px;
    padding: 10px 3px 8px 20px;
    margin-bottom: 40px;
    p {
      font-size: 14px;
      padding-left: 0;
    }
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

  @media screen and (max-width: ${SIZE.tablet}) {
    list-style: none;
    border: 1.5px solid ${COLOR.main_red};
    border-radius: 20px;
    padding: 10px 2px 8px 20px;
    h4 {
      font-size: 14px;
    }
  }
`;

const About = () => {
  const frontendSkills = SkillData.filter((it) => it.skillType === 'frontend');
  const etcSkills = SkillData.filter((it) => it.skillType === 'etc');

  return (
    <Page>
      <UpArrow />
      <AboutTitle>ABOUT</AboutTitle>
      <AboutMainContent>
        <PrivacyWrapper>
          <div>
            <img src={process.env.PUBLIC_URL + '/assets/mimo2.png'} />
            <ProfileWrapper>
              <h2>프론트엔드 개발자</h2>
              <p>기지원</p>
            </ProfileWrapper>
          </div>
          <LinkWrapper>
            <LinkDiv>
              <FaGithub />
              <p>깃헙:</p>
              <LinkButton
                text="Github페이지 >"
                link="https://github.com/kijiwon"
              />
            </LinkDiv>
            <LinkDiv>
              <SiNotion />
              <p>노션:</p>
              <LinkButton
                text="Notion페이지 >"
                link="https://www.notion.so/PROJECT-b417b515af524f0b807c376e3f5dadd0?pvs=4"
              />
            </LinkDiv>
            <LinkDiv>
              <FaBlogger />
              <p>블로그:</p>
              <LinkButton
                text="Blog페이지 >"
                link="https://princesskiji.tistory.com/"
              />
            </LinkDiv>
          </LinkWrapper>
        </PrivacyWrapper>
        <IntroduceWrapper>
          <ContextWrapper>
            <h3>Introduce</h3>
            <IntroduceContext>
              <p>
                React기반의 개발자로, 반응형 웹앱을 통해 사용자 경험을
                개선하는데 중점을 둔 개발을 주로 하고 있습니다.
              </p>
              <p>
                상상한 것을 실제로 구현한다는 데에 매력을 느껴 개발자의 길을
                걸어가고 있습니다.
                <br />
                현재는 프론트엔드 개발자에 주력하고 있지만, 이전에 백엔드에 대한
                강의를 맛보기로 들어본 경험이 있어 후에 백엔드에 대해서도 깊이
                탐구해 풀스택 개발자로서의 성장을 꿈꾸고 있습니다.
              </p>
            </IntroduceContext>
          </ContextWrapper>
          <ContextWrapper>
            <h3>Skills</h3>
            <SkillList>
              <li>
                <h4>Frontend</h4>
                {frontendSkills.map((skill, idx) => (
                  <img
                    key={idx}
                    src={`https://img.shields.io/badge/${skill.skillName}-${skill.skillColor}?style=flat-square&logo=${skill.skillLogo}&logoColor=white`}
                  />
                ))}
              </li>
              <li>
                <h4>Etc</h4>
                {etcSkills.map((skill, idx) => (
                  <img
                    key={idx}
                    src={`https://img.shields.io/badge/${skill.skillName}-${skill.skillColor}?style=flat-square&logo=${skill.skillLogo}&logoColor=white`}
                  />
                ))}
              </li>
            </SkillList>
          </ContextWrapper>
        </IntroduceWrapper>
      </AboutMainContent>
      <DownArrow />
    </Page>
  );
};

export default About;
