import styled from 'styled-components/macro';
import colors from '../../styles/colors';

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
  align-items: flex-start;
  justify-content: space-between;

  background: linear-gradient(198.83deg, ${colors.pink} 8.35%, ${colors.purple} 78.29%);
`;

export const InnerContainer = styled.div`
  width: 85%;

  margin-top: 40px;
  margin-bottom: 40px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 40px;
  font-size: 2rem;
  font-weight: 900;

  background: -webkit-linear-gradient(180deg, ${colors.pink} 0%, ${colors.purple} 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
