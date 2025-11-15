import * as React from 'react';
import { Container } from '@/components/container';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
  className?: string;
}

const HomePage: React.FC<Props> = ({ className }) => {
  const cardItems = [
    {
      title: 'Email & Password',
      text: 'Traditional authentication with email and password validation.',
    },
    {
      title: 'GitHub OAuth',
      text: 'Sign in with your GitHub account for quick and secure access.',
    },
    {
      title: 'Google OAuth',
      text: 'One-click authentication using your Google account.',
    },
  ];

  return (
    <div>
      <Container className="min-h-[calc(100vh-266px)] md:min-h-[calc(100vh-114px)] items-center">
        <div className="flex flex-col gap-2 lg:gap-4 w-full my-10">
          <h1 className="text-primary leading-tighter text-4xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter max-w-4xl mx-auto text-center">
            Welcome to Auth Demo
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-center text-base text-balance sm:text-lg">
            A comprehensive authentication demo showcasing various login methods
            including email/password, GitHub and Google authentication.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center mt-6">
            <Button size={'lg'} className="w-full sm:w-auto" asChild>
              <Link href="/auth">Get Started</Link>
            </Button>
            <Button
              variant={'outline'}
              size={'lg'}
              className="w-full sm:w-auto"
              asChild
            >
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-7xl md:mx-auto">
            {cardItems.map((cardItem, key) => (
              <Card key={key} className="gap-0">
                <CardHeader>
                  <CardTitle>
                    <h3 className="text-xl font-bold">{cardItem.title}</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{cardItem.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
