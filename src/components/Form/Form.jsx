import React from 'react';
import { useDropzone } from 'react-dropzone';
import languages from '../../consts/languages';

import Button from '../Button';

import uploadIcon from './assets/file-upload-solid.svg';
import headphonesIcon from './assets/headphones-solid.svg';

import {
  FormContainer,
  LanguageSelectContainer,
  LanguageSelect,
  Label,
  DropArea,
  SupportText,
  UploadedFileContainer,
  UploadedFileIcon,
  StyledSelect,
} from './Form.styles';

function Form(props) {
  const {
    onSubmit,
  } = props;

  const {
    acceptedFiles,
    // fileRejections,
    getRootProps,
    getInputProps,
  } = useDropzone({ multiple: false, accept: 'audio' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(acceptedFiles);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <LanguageSelectContainer>
        <LanguageSelect>
          <Label for="lang-from">
            Idioma Original
          </Label>
          <StyledSelect id="lang-from" options={languages} />
        </LanguageSelect>
        <LanguageSelect>
          <Label for="lang-to">
            Traduzir Para
          </Label>
          <StyledSelect id="lang-to" options={languages} />
        </LanguageSelect>
      </LanguageSelectContainer>
      <DropArea {...getRootProps()}>
        <input {...getInputProps()} />
        {acceptedFiles.length === 0
          ? (
            <>
              <Button
                text="Selecione o arquivo"
                icon={uploadIcon}
                onClick={(e) => e.preventDefault()}
              />
              <SupportText>
                ou solte o arquivo aqui
              </SupportText>
            </>
          )
          : (
            <UploadedFileContainer>
              <UploadedFileIcon
                src={headphonesIcon}
              />
              {acceptedFiles[0].name}
            </UploadedFileContainer>
          )}
      </DropArea>

      {/* Show file rejections here */}

      <Button
        text="Traduzir"
        gradient
        disabled={acceptedFiles.length === 0}
        type="submit"
      />
    </FormContainer>
  );
}

export default Form;
