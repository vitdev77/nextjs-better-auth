import Link from 'next/link';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export default function Logo({ className }: Props) {
  return (
    <Link
      href="/"
      className={cn('flex items-center justify-center gap-1', className)}
    >
      <span className="text-primary text-xl font-bold">BETTER-AUTH.</span>{' '}
      <Badge>Demo</Badge>
    </Link>
  );
}
