import styled from 'styled-components/macro';
import colors from '../../styles/colors';

import { ReactComponent as Loading } from '../../assets/loading.svg';
import { ReactComponent as Done } from '../../assets/check.svg';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const WhiteContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 52%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-color: ${colors.white};
`;

export const PinkContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 48%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(198.83deg, ${colors.pink} 8.35%, ${colors.purple} 78.29%);
`;

export const EmailAdvice = styled.p`
  max-width: 50%;

  text-align: center;
  color: ${colors.white};
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.6;
`;

export const Bold = styled.span`
  font-weight: 700;
`;

export const InnerContainer = styled.div`
  width: 85%;
  min-height: calc(100vh - 120px);

  margin-top: 40px;
  margin-bottom: 80px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const StatusContainer = styled.div`
  flex: 1;
  width: 70%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  align-self: center;
  margin-top: auto;
  margin-bottom: auto;

  font-size: 1.4rem;
  line-height: 1.5;
  color: ${colors.purple};
  font-weight: 600;
  text-align: center;
  padding-bottom: 120px;
`;

export const LoadingAnimation = styled(Loading)`
  margin: 0 !important;
`;

export const DoneCheck = styled(Done)`
  width: 120px;
  margin-bottom: 30px;
`;

export const DoneRetry = styled.div`
  margin-top: 30px;
`;

export const DoneDescription = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: ${colors.darkGray};
`;

export const EmailHighlight = styled.span`
  color: ${colors.pink};
  font-weight: 500;
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 120px;
  font-size: 2rem;
  font-weight: 900;

  background: -webkit-linear-gradient(180deg, ${colors.pink} 0%, ${colors.purple} 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
