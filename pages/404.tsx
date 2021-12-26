import { FC } from 'react';
import Container from '../components/container';
import NoResult from '../components/no-result';

const NotFound = () => (
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
