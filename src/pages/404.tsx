import React, { FC } from 'react';
import Container from '~app/components/Container';
import NoResult from '~app/components/NoResult';

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
