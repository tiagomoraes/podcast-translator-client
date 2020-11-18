import React, { useState } from 'react';

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
  EmailHighlight,
  Title,
  PinkContainer,
  EmailAdvice,
  Bold,
} from './Home.styles';

function Home() {
  const [status, setStatus] = useState('empty');
  const [response] = useState({
    email: 'tiago3902@gmail.com',
  });

  const handleSubmit = (data) => {
    console.log(data);
    setStatus('loading');
    setTimeout(() => {
      setStatus('done');
    }, 4000);
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
                {' '}
                <EmailHighlight>
                  {response.email}
                </EmailHighlight>
                {' '}
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
