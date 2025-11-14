import * as React from 'react';
import { Container } from '@/components/container';

interface Props {
  className?: string;
}

const HomePage: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Container>Home Page</Container>
    </div>
  );
};

export default HomePage;
