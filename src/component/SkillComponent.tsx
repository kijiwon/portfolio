import {
  FrontendSkillData,
  ToolsSkillData,
  EtcSkillData,
} from '../data/skillData';

export const SkillListComponent = ({ type }: { type: string }) => {
  const skillData =
    type === 'frontend'
      ? FrontendSkillData
      : type === 'tools'
        ? ToolsSkillData
        : EtcSkillData;

  return (
    <div>
      {skillData.map((skill, idx) => (
        <>
          {skill.skillLogo === 'zustand' ||
          skill.skillLogo === 'styled-components' ? (
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
                      skill.skillName === 'amazons3' ? `-wordmark` : ''
                    }.svg`
              }
              alt={skill.skillName}
            />
          )}
          <p>{skill.skillName}</p>
        </>
      ))}
    </div>
  );
};
