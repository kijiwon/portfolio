import styled from 'styled-components';
import { COLOR, SIZE } from '../style/theme';
import { Page } from '../component/CommonStyle';
import { FaGithub } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';
import { FaBlogger } from 'react-icons/fa';
import LinkButton from '../component/LinkButton';
import { DownArrow, UpArrow } from '../component/ScrollArrow';
import { SkillListComponent } from '../component/SkillComponent';

const AboutMainContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: ${SIZE.tablet}) {
    width: 90%;
    margin-top: 50px;
    flex-direction: column;
    justify-content: start;
  }
`;

const PrivacyWrapper = styled.section`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 10px;
  @media screen and (max-width: ${SIZE.tablet}) {
    width: 100%;
    flex-direction: row;
    margin-bottom: 10px;
    border-bottom: 4px dashed ${COLOR.hover_green};
  }
`;

const ProfileWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  font-size: 20px;
  font-weight: 600;
  font-family: 'jua';
  letter-spacing: 1px;
  img {
    width: 220px;
    border: 3px double ${COLOR.main_red};
    border-radius: 50% 50% 0 0;
    background-color: ${COLOR.bg_green};
    margin-bottom: 20px;
  }
  h2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    > p {
      width: fit-content;
      font-size: 24px;
      margin-bottom: 5px;
      box-shadow: inset 0px -0.5em 0 0 rgba(204, 208, 240, 1);
    }
  }

  @media screen and (max-width: ${SIZE.tablet}) {
    justify-content: center;
    align-items: center;
    margin: 0 0 10px 0;
    img {
      width: 100px;
      border-radius: 50%;
      margin-bottom: 4px;
    }
    h2 {
      font-size: 14px;
      > p {
        font-size: 16px;
      }
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
    font-size: 16px;
    margin: 10px 0;
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

const SkillList = styled.ul`
  max-height: 200px;
  overflow-y: scroll;
  list-style: disc;
  padding-left: 10px;
  &::-webkit-scrollbar {
    width: 8px;
    height: auto;
  }
  &::-webkit-scrollbar-thumb {
    background: ${COLOR.hover_green};
    border-radius: 10px;
  }
  h4 {
    font-size: 16px;
    margin-bottom: 10px;
  }
  img {
    margin-right: 5px;
    margin-bottom: 5px;
  }

  @media screen and (max-width: ${SIZE.tablet}) {
    /* max-height: fit-content; */
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
  return (
    <Page>
      <UpArrow />
      <h1>ABOUT</h1>
      <AboutMainContent>
        <PrivacyWrapper>
          <ProfileWrapper>
            <img src={process.env.PUBLIC_URL + '/assets/mimo2.png'} />
            <h2>
              <p>새로운 기술을 탐구하는</p>React 개발자
            </h2>
            {/* <p>
                프론트엔드 개발에 데이터베이스와 인증을 추가해 구현함으로써
                사용자들이 더 많은 기능을 활용할 수 있도록 학습하고 적용하고
                있습니다. 백엔드 개발에 대한 지식을 더욱 심화해 풀스택 개발자로
                성장하고자 합니다.
              </p> */}
          </ProfileWrapper>

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
            <h3>Skills</h3>
            <SkillList>
              <li>
                <h4>Frontend</h4>
                <SkillListComponent type="frontend" />
              </li>
              <li>
                <h4>Tools</h4>
                <SkillListComponent type="tools" />
              </li>
              <li>
                <h4>Etc</h4>
                <SkillListComponent type="etc" />
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
