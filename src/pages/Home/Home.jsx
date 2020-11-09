import React from 'react';

import {
  Container,
  WhiteContainer,
  InnerContainer,
  PinkContainer,
  Title,
} from './Home.styles';

export default function Home() {
  return (
    <Container>
      <WhiteContainer>
        <InnerContainer>
          <Title>Podcast Translator.</Title>
        </InnerContainer>
      </WhiteContainer>
      <PinkContainer>
        oi
      </PinkContainer>
    </Container>
  );
}
