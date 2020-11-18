import React, { useState } from 'react';
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
  Description,
  EmailContainer,
  Input,
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

  const [from, setFrom] = useState(languages[0]);
  const [to, setTo] = useState(languages[1]);
  const [email, setEmail] = useState('');

  const {
    acceptedFiles,
    // fileRejections,
    getRootProps,
    getInputProps,
  } = useDropzone({ multiple: false });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFromChange = (e) => {
    setFrom(e);
  };

  const handleToChange = (e) => {
    setTo(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      to,
      from,
      email,
      files: acceptedFiles,
    };

    onSubmit(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <EmailContainer>
        <Label htmlFor="from-email">
          E-mail*
          <Description>
            Você receberá o podcast traduzido no seu email,
            após o fim do processamento.
          </Description>
        </Label>
        <Input
          id="form-email"
          type="email"
          placeholder="example@email.com"
          onChange={handleEmailChange}
          value={email}
          required
        />
      </EmailContainer>
      <LanguageSelectContainer>
        <LanguageSelect>
          <Label htmlFor="lang-from">
            Idioma Original
          </Label>
          <StyledSelect
            id="lang-from"
            value={from}
            onChange={handleFromChange}
            options={languages}
          />
        </LanguageSelect>
        <LanguageSelect>
          <Label htmlFor="lang-to">
            Traduzir Para
          </Label>
          <StyledSelect
            id="lang-to"
            value={to}
            onChange={handleToChange}
            options={languages}
          />
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
