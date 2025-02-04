import styled from 'styled-components';
import {
  FrontendSkillData,
  ToolsSkillData,
  EtcSkillData,
} from '../data/skillData';
import { COLOR, SIZE } from '../style/theme';

const ListWrapper = styled.ul`
  color: ${COLOR.main_green};
  @media screen and (max-width: ${SIZE.tablet}) {
  }
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: repeat(5, 100px);

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
                width={'50px'}
                src={process.env.PUBLIC_URL + `/assets/${skill.skillLogo}.png`}
                alt={skill.skillName}
              />
            ) : (
              <img
                key={idx}
                width={'50px'}
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
