'use client';

import * as React from 'react';
import Image from 'next/image';
import Logo from '@/components/logo';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from '@/components/ui/field';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export default function AuthPage({ className }: React.ComponentProps<'div'>) {
  const [isSignIn, setIsSignIn] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleEmailAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignIn) {
      alert('Sign in with email/password - This would authenticate the user');
    } else {
      if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
      }
      alert(
        'Register with email/password - This would create a new user account'
      );
    }
  };

  const handleOAuth = (provider: string) => {
    alert(
      `${provider} authentication - This would redirect to ${provider} OAuth`
    );
  };

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-8">
        <Logo />

        <div className={cn('flex flex-col gap-4', className)}>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">
                {isSignIn ? 'Welcome back' : 'Join us today'}
              </CardTitle>
              <CardDescription>
                {isSignIn ? 'Login' : 'Register'} with your GitHub or Google
                account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEmailAuth}>
                <FieldGroup>
                  {/* OAuth Buttons */}
                  <Field className="grid grid-cols-2 gap-4">
                    <Button
                      variant={'outline'}
                      type="button"
                      onClick={() => handleOAuth('GitHub')}
                      className="flex-1"
                    >
                      <Image
                        height={16}
                        width={16}
                        src={'https://authjs.dev/img/providers/github.svg'}
                        alt="GitHub Logo"
                      />{' '}
                      GitHub
                    </Button>
                    <Button
                      variant={'outline'}
                      type="button"
                      onClick={() => handleOAuth('Google')}
                      className="flex-1"
                    >
                      <Image
                        height={16}
                        width={16}
                        src={'https://authjs.dev/img/providers/google.svg'}
                        alt="Google Logo"
                      />{' '}
                      Google
                    </Button>
                  </Field>
                  <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                    Or continue with
                  </FieldSeparator>
                  <Field>
                    <FieldLabel htmlFor="email">Email address</FieldLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                    />
                  </Field>
                  <Field>
                    <div className="flex items-center">
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      {isSignIn && (
                        <a
                          href="#"
                          className="ml-auto text-sm underline-offset-4 hover:underline"
                        >
                          Forgot your password?
                        </a>
                      )}
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      placeholder="Enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Field>
                  {!isSignIn && (
                    <Field>
                      <FieldLabel htmlFor="confirmPassword">
                        Confirm Password
                      </FieldLabel>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        placeholder="Confirm your password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </Field>
                  )}
                  <Field>
                    <Button type="submit">
                      {isSignIn ? 'Sign In' : 'Create Account'}
                    </Button>
                  </Field>
                  <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                    {isSignIn
                      ? "Don't have an account?"
                      : 'Already have an account?'}
                  </FieldSeparator>
                  <Button
                    variant={'outline'}
                    onClick={() => setIsSignIn(!isSignIn)}
                    type="button"
                  >
                    {isSignIn ? 'Sign up' : 'Sign in'}
                  </Button>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
          {/* <FieldDescription className="px-6 text-center">
            By clicking continue, you agree to our{' '}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </FieldDescription> */}
        </div>
      </div>
    </div>
  );
}
