import Container from 'components/container';
import NoResult from 'components/no-result';

export default function NotFound() {
  return (
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
}
