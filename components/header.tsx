'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from './ui/button';
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
    { href: '/auth', label: 'Auth' },
    { href: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <>
      <header
        className={cn('bg-background sticky top-0 z-50 w-full', className)}
      >
        <Container>
          <div className="flex items-center justify-between py-3.5 gap-4 w-full">
            <Logo />

            <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
              <Separator
                orientation="vertical"
                className="data-[orientation=vertical]:h-4 3xl:flex hidden"
              />

              <LayoutToggle className="3xl:flex hidden" />

              <Separator
                orientation="vertical"
                className="data-[orientation=vertical]:h-4 3xl:flex hidden"
              />

              <ThemeToggle />

              <div className="flex items-center space-x-2 ml-auto mr-4 md:m-0">
                {isAuthenticated ? (
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-green-600 font-medium">
                      ✓ Authenticated
                    </span>
                    <Button onClick={handleSignOut}>Sign Out</Button>
                  </div>
                ) : (
                  <>
                    <Button variant={'outline'} asChild>
                      <Link href={'/auth'}>Sign In</Link>
                    </Button>
                    <Button asChild>
                      <Link href={'/dashboard'}>Dashboard</Link>
                    </Button>
                    <Button
                      className="md:hidden"
                      variant={'ghost'}
                      size={'icon'}
                    >
                      <Menu className="size-5" />
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </Container>
      </header>

      <header className="bg-background sticky top-0 z-50 w-full">
        <Container>
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Logo />

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <Button
                  asChild
                  variant={pathname === item.href ? 'default' : 'ghost'}
                  key={item.href}
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}
            </div>

            {/* Auth Status & Actions */}
            <div className="flex items-center space-x-2 ml-auto mr-4 md:m-0">
              {isAuthenticated ? (
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-green-600 font-medium">
                    ✓ Authenticated
                  </span>
                  <Button onClick={handleSignOut}>Sign Out</Button>
                </div>
              ) : (
                <Button variant={'outline'} asChild>
                  <Link href={'/auth'}>Sign In</Link>
                </Button>
              )}
              <LayoutToggle />
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant={'ghost'} size={'icon'}>
                <Menu className="size-5" />
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <div className="space-y-1 my-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === item.href
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background text-primary hover:bg-secondary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
