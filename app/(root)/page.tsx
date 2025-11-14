import * as React from 'react';
import { Container } from '@/components/container';

interface Props {
  className?: string;
}

const HomePage: React.FC<Props> = ({ className }) => {
  return (
    <div>
      <Container className="min-h-[calc(100vh-274px)] md:min-h-[calc(100vh-122px)]">
        <h1 className="my-10">Home Page</h1>
      </Container>
    </div>
  );
};

export default HomePage;
