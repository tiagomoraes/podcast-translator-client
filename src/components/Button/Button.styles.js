import styled, { css } from 'styled-components/macro';
import colors from '../../styles/colors';

export const ButtonContainer = styled.button`
  padding: 15px 60px;
  max-width: 100%;
  min-width: fit-content;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  border: 0;

  background: ${({ gradient }) => (gradient
    ? `linear-gradient(261.07deg, ${colors.purple} 24.63%, ${colors.pink} 79.44%)`
    : colors.pink
  )};

  ${({ disabled }) => disabled && css`
    background: ${colors.lightGray};
    cursor: default;
    &:hover {
      transform: scale(1) !important;
    }
    `}

  color: ${colors.white};
  font-size: 0.95rem;
  font-weight: 700;

  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Icon = styled.img`
  max-height: 25px;
  max-width: 25px;
  margin-right: 15px;
`;
