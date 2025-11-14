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
      <span className="uppercase text-primary font-bold">Better-Auth.</span>{' '}
      <Badge>Demo</Badge>
    </Link>
  );
}
