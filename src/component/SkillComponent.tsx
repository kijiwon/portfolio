import styled from 'styled-components';
import {
  FrontendSkillData,
  ToolsSkillData,
  EtcSkillData,
} from '../data/skillData';
import { SIZE } from '../style/theme';

const ListWrapper = styled.ul`
  width: 100%;
  font-size: 20px;

  > h4 {
    margin-bottom: 20px;
  }
  @media screen and (max-width: ${SIZE.tablet}) {
    font-size: 16px;
    > h4 {
      margin-bottom: 10px;
    }
  }
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: repeat(5, 85px);
  gap: 12px;
  margin-bottom: 20px;
  font-size: 16px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  img {
    width: 50px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: ${SIZE.tablet}) {
    grid-template-columns: repeat(6, 55px);
    font-size: 10px;
    gap: 5px;
    margin-bottom: 10px;

    > div {
      margin-bottom: 5px;
    }

    img {
      width: 25px;
    }
  }
`;

export const SkillListComponent = ({ type }: { type: string }) => {
  const skillData =
    type === 'Frontend'
      ? FrontendSkillData
      : type === 'Tools'
        ? ToolsSkillData
        : EtcSkillData;

  return (
    <ListWrapper>
      <h4>{type}</h4>
      <ListItem>
        {skillData.map((skill, idx) => (
          <div key={idx}>
            {skill.skillLogo === 'zustand' ||
            skill.skillLogo === 'styledcomponents' ? (
              <img
                key={idx}
                src={process.env.PUBLIC_URL + `/assets/${skill.skillLogo}.png`}
                alt={skill.skillName}
              />
            ) : (
              <img
                key={idx}
                src={
                  skill.skillLogo === 'axios'
                    ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.skillLogo}/${skill.skillLogo}-plain.svg`
                    : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${
                        skill.skillLogo
                      }/${skill.skillLogo}-original${
                        skill.skillName === 'Amazons3' ? `-wordmark` : ''
                      }.svg`
                }
                alt={skill.skillName}
              />
            )}
            <p>{skill.skillName}</p>
          </div>
        ))}
      </ListItem>
    </ListWrapper>
  );
};
