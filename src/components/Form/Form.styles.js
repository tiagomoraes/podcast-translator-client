import styled from 'styled-components/macro';
import Select from 'react-select';

import colors from '../../styles/colors';

export const FormContainer = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const LanguageSelectContainer = styled.div`
  margin-bottom: 50px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const LanguageSelect = styled.div`
  margin-right: 40px;
  width: 200px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Label = styled.label`
  color: ${colors.purple};
  font-weight: 700;
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  margin-top: 20px;
`;

export const DropArea = styled.div`
  width: 100%;
  height: 280px;
  margin-bottom: 80px;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: 1px dashed ${colors.darkGray};
`;

export const UploadedFileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 1rem;
`;

export const UploadedFileIcon = styled.img`
  width: 40px;
  margin-right: 20px;
`;

export const SupportText = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  
  color: ${colors.darkGray};
  font-size: 0.95rem;
  font-weight: 700;
`;
