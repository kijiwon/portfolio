import styled from 'styled-components';
import { COLOR, SIZE } from '../style/theme';

export const Page = styled.div`
  position: relative;
  width: 100vw;
  min-width: ${SIZE.mobileMin};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${SIZE.tablet}) {
    /* height: calc(var(--vh, 1vh) * 100); */
  }
`;

export const TitleText = styled.p`
  font-size: 150px;
  font-weight: bold;
  letter-spacing: 10px;
  color: ${COLOR.bg};
  text-shadow:
    -2px 0px ${COLOR.main_red},
    0px 2px ${COLOR.main_red},
    5px 0px ${COLOR.main_red},
    0px -3px ${COLOR.main_red};

  /* 모바일버전 */
  @media screen and (max-width: ${SIZE.tablet}) {
    font-size: 100px;
  }
`;
