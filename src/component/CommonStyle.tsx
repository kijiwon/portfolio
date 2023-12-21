import styled from 'styled-components';
import { COLOR } from '../style/theme';

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;
