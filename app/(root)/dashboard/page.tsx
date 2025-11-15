'use client';

import * as React from 'react';
import { Container } from '@/components/container';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ArrowLeft,
  ChartLine,
  CheckCircle2Icon,
  Loader,
  Settings,
  TriangleAlert,
  User,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface Props {
  className?: string;
}

const DashboardPage: React.FC<Props> = ({ className }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate checking authentication status
    const checkAuth = () => {
      // In a real app, this would check for a valid token/session
      const mockAuthStatus = localStorage.getItem('isAuthenticated') === 'true';
      setIsAuthenticated(mockAuthStatus);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const cardItems = [
    {
      title: 'Profile',
      text: 'Manage your account settings',
      icon: User,
    },
    {
      title: 'Analytics',
      text: 'View your activity data',
      icon: ChartLine,
    },
    {
      title: 'Settings',
      text: 'Configure your preferences',
      icon: Settings,
    },
  ];

  const handleSignOut = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    alert('You have been signed out!');
  };

  const handleMockSignIn = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
    alert('Mock authentication successful! You are now signed in.');
  };

  if (isLoading) {
    return (
      <Container className="min-h-[calc(100vh-266px)] md:min-h-[calc(100vh-114px)] items-center justify-center">
        <div className="flex items-center text-muted-foreground/30 gap-2">
          <Loader className="animate-spin" /> Checking authentication...
        </div>
      </Container>
    );
  }

  if (!isAuthenticated) {
    return (
      <Container className="min-h-[calc(100vh-266px)] md:min-h-[calc(100vh-114px)] items-center justify-center">
        <Card className="flex w-full max-w-sm text-center gap-8">
          <CardHeader className="text-center">
            <CardTitle className="space-y-4">
              <TriangleAlert className="size-12 text-destructive flex items-center justify-center mx-auto" />
              <h1 className="text-2xl">Access Denied</h1>
            </CardTitle>
            <CardDescription>
              <p className="text-base max-w-3xs mx-auto">
                You need to be authenticated to access this page.
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <Button size={'lg'} className="w-full" onClick={handleMockSignIn}>
                Mock Sign In (for demo)
              </Button>
              <Button
                variant={'secondary'}
                size={'lg'}
                className="w-full"
                asChild
              >
                <Link href="/auth">Go to Auth Page</Link>
              </Button>
              <Button
                variant={'link'}
                className="w-full mt-8 hover-group"
                asChild
              >
                <Link href="/">
                  <ArrowLeft className="hover:ml-8" /> Back to Home
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="min-h-[calc(100vh-266px)] md:min-h-[calc(100vh-114px)] items-center justify-center">
      <div className="flex flex-col gap-6 w-full max-w-7xl my-10">
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 shadow-sm w-full">
          <div className="flex flex-col sm:flex-row text-center sm:text-left justify-between items-center gap-6">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome to your protected dashboard!
              </p>
            </div>
            <div className="grid grid-cols-1 w-3/4 sm:w-auto sm:grid-cols-2 items-center gap-2">
              <Button
                onClick={handleSignOut}
                size={'lg'}
                variant={'destructive'}
              >
                Sign Out
              </Button>
              <Button variant={'outline'} size={'lg'} asChild>
                <Link href={'/'}>Home page</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cardItems.map((cardItem, key) => {
            const IconComponent = cardItem.icon;
            return (
              <div
                key={key}
                className="bg-card text-card-foreground justify-center flex flex-col gap-6 rounded-xl border p-6 shadow-sm w-full"
              >
                <div className="flex flex-col sm:flex-row text-center sm:text-left items-center gap-4">
                  <IconComponent className="size-12 text-muted-foreground/50" />
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold">{cardItem.title}</h3>
                    <p className="text-muted-foreground">{cardItem.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-card text-card-foreground flex flex-col space-y-4 rounded-xl border p-6 shadow-sm w-full">
          <h2 className="text-xl font-semibold text-center sm:text-left">
            Authentication Status
          </h2>
          <Alert>
            <CheckCircle2Icon />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </Container>
  );
};

export default DashboardPage;
