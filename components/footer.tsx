import * as React from 'react';
import { Container } from './container';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn('border-t border-dashed', className)}>
      <Container>
        <div className="py-4">Footer</div>
      </Container>
    </footer>
  );
};
