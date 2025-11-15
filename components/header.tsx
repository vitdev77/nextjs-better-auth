'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import { Menu } from 'lucide-react';
import { Container } from './container';
import Logo from './logo';
import { ThemeToggle } from './theme-toggle';
import { LayoutToggle } from './layout-toggle';
import { Separator } from './ui/separator';
import { cn } from '@/lib/utils';

export function Header({ className }: { className?: string }) {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    // Check authentication status
    const checkAuth = () => {
      const mockAuthStatus = localStorage.getItem('isAuthenticated') === 'true';
      setIsAuthenticated(mockAuthStatus);
    };

    checkAuth();

    // Listen for storage changes (when user signs in/out in another tab)
    window.addEventListener('storage', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    alert('You have been signed out!');
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/auth', label: 'Auth' },
  ];

  return (
    <header
      className={cn(
        'backdrop-blur-sm bg-background/60 border-b border-dashed sticky top-0 z-50 w-full',
        className
      )}
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between py-3.5 gap-4 w-full">
          <div className="w-full flex">
            <Logo />
            <div className="ml-auto sm:flex items-center gap-2 sm:flex-1 sm:justify-end">
              <div className="flex items-center space-x-2 ml-auto mr-4 sm:m-0">
                {isAuthenticated ? (
                  <Button onClick={handleSignOut} variant={'destructive'}>
                    Sign Out
                  </Button>
                ) : (
                  <>
                    <Button
                      variant={'outline'}
                      asChild
                      className="sm:flex hidden"
                    >
                      <Link href={'/auth'}>Sign In</Link>
                    </Button>
                  </>
                )}
              </div>
              <Separator
                orientation="vertical"
                className="data-[orientation=vertical]:h-4 3xl:flex hidden ml-2"
              />
              <LayoutToggle className="3xl:flex hidden" />
              <Separator
                orientation="vertical"
                className="data-[orientation=vertical]:h-4 3xl:flex hidden"
              />
              <ThemeToggle />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 w-full sm:hidden">
            {navItems.map((item) => (
              <Button
                variant={'secondary'}
                className={cn(
                  pathname === item.href &&
                    buttonVariants({ variant: 'default', size: 'lg' })
                )}
                size={'lg'}
                key={item.label}
                asChild
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}
