import * as React from 'react';
import { Container } from './container';
import { cn } from '@/lib/utils';
import Logo from './logo';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn('border-t border-dashed', className)}>
      <Container>
        <div className="py-4 w-full text-center">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} BETTER-AUTH. (demo)
          </p>
        </div>
      </Container>
    </footer>
  );
};
