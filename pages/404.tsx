import React, { FC } from 'react';
import Container from '../components/Container';
import NoResult from '../components/no-result';

const NotFound: FC = () => (
  <Container>
    <NoResult />
    <p style={{ textAlign: 'center' }}>
      <span role="img" aria-label="telephone">
        📞
      </span>
      Call the police?
    </p>
  </Container>
);

export default NotFound;
