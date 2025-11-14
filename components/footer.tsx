import * as React from 'react';
import { Container } from './container';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={className}>
      <Container>
        <div className="py-4">Footer</div>
      </Container>
    </footer>
  );
};
