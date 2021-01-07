import React, { useState } from 'react';
import api from '../../services/api';

import Form from '../../components/Form';
import Button from '../../components/Button';

import {
  Container,
  WhiteContainer,
  InnerContainer,
  StatusContainer,
  LoadingAnimation,
  DoneCheck,
  DoneDescription,
  DoneRetry,
  Title,
  PinkContainer,
  EmailAdvice,
  Bold,
} from './Home.styles';

function Home() {
  const [status, setStatus] = useState('empty');

  const handleSubmit = async (data) => {
    setStatus('loading');
    console.log(data);

    const formData = new FormData();
    formData.append('podcast_file', data.files[0]);
    formData.append('email', data.email);

    const params = {
      headers: {
        'Content-Type': 'multipart/form-data;',
      },
    };

    try {
      const res = await api.patch('/audio/upload', formData, params);
      if (res.status === 200) {
        setStatus('done');
        return;
      }

      setStatus('error');
    } catch (error) {
      setStatus(error);
    }

    setStatus('done');
  };

  return (
    <Container>
      <WhiteContainer>
        <InnerContainer>
          <Title>Podcast Translator.</Title>
          {status === 'empty' && (
            <Form onSubmit={handleSubmit} />
          )}
          {status === 'loading' && (
            <StatusContainer>
              <LoadingAnimation />
              Fazendo upload do seu podcast...
            </StatusContainer>
          )}
          {status === 'done' && (
            <StatusContainer>
              <DoneCheck />
              Seu podcast está sendo traduzido!
              <DoneDescription>
                Quando a tradução acabar, enviaremos um email para
                o e-mail cadastrado anteriormente
                com o resultado da tradução.
              </DoneDescription>
              <DoneRetry>
                <Button
                  text="Traduzir novamente"
                  onClick={() => setStatus('empty')}
                />
              </DoneRetry>
            </StatusContainer>
          )}
        </InnerContainer>
      </WhiteContainer>
      <PinkContainer>
        {status === 'done' ? (
          <EmailAdvice>
            <Bold>Fique tranquilo! </Bold>
            Após a conclusão do processo de tradução,
            você receberá um link no seu e-mail para baixar o podcast.
          </EmailAdvice>
        ) : (
          <EmailAdvice>
            Faça upload de um arquivo para traduzir o seu podcast.
          </EmailAdvice>
        )}
      </PinkContainer>
    </Container>
  );
}

export default Home;
