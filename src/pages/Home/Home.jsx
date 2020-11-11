import React from 'react';

import Form from '../../components/Form';

import {
  Container,
  WhiteContainer,
  InnerContainer,
  PinkContainer,
  Title,
} from './Home.styles';

function Home() {
  const handleSubmit = (files) => {
    console.log(files);
  };

  return (
    <Container>
      <WhiteContainer>
        <InnerContainer>
          <Title>Podcast Translator.</Title>
          <Form onSubmit={handleSubmit} />
        </InnerContainer>
      </WhiteContainer>
      <PinkContainer>
        oi
      </PinkContainer>
    </Container>
  );
}

export default Home;
