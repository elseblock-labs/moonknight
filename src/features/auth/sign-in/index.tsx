'use client'

import { Logo } from '@/assets/logo'
import { Button } from '@/components/ui/button'
import { ThemeSwitcher } from '@/components/common/theme-switcher'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export function SignIn() {
  const router = useRouter()

  const handleSignIn = () => {
    // No validation - just redirect to dashboard
    router.push('/dashboard')
  }

  return (
    <div className='relative grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2'>
      {/* Theme Switcher - Fixed Position */}
      <div className='fixed top-4 right-4 z-50'>
        <ThemeSwitcher invertColors />
      </div>

      {/* Left side - switches between white/black based on theme */}
      <div className='bg-white dark:bg-black relative h-full max-lg:hidden overflow-hidden flex items-center justify-center'>
        <div className='relative z-10 px-12 max-w-lg text-black dark:text-white'>
          <div className='flex items-center gap-3 mb-8'>
            <Logo className='size-12' />
            <h1 className='text-3xl font-light'>App Name</h1>
          </div>

          <h2 className='text-2xl font-light mb-4'>
            Welcome back
          </h2>

          <p className='text-gray-600 dark:text-gray-300 mb-8 font-light'>
            Sign in to your account to continue.
          </p>
        </div>

        {/* Decorative dotted pattern */}
        <div className='absolute inset-0'>
          {/* Vertical dotted lines */}
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={`v-line-${i}`}
              className='absolute top-0 h-full w-px border-l border-dotted border-gray-300 dark:border-gray-700 opacity-30'
              style={{ left: `${(i + 1) * 4.8}%` }}
            />
          ))}

          {/* Horizontal dotted lines */}
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={`h-line-${i}`}
              className='absolute left-0 w-full h-px border-t border-dotted border-gray-300 dark:border-gray-700 opacity-30'
              style={{ top: `${(i + 1) * 3.8}%` }}
            />
          ))}
        </div>
      </div>

      {/* Right side - switches between black/white based on theme */}
      <div className='bg-black dark:bg-white lg:p-8 h-full flex items-center justify-center'>
        <div className='w-full'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-2 py-8 sm:w-[480px] sm:p-8'>
            <div className='mb-4 flex items-center justify-center'>
              <Logo className='me-2' />
              <h1 className='text-xl font-light text-white dark:text-black'>App Name</h1>
            </div>
          </div>
          <div className='mx-auto flex w-full max-w-sm flex-col justify-center space-y-6'>
            <div className='flex flex-col space-y-2 text-start'>
              <h2 className='text-lg font-semibold tracking-tight text-white dark:text-black'>Sign in</h2>
              <p className='text-gray-300 dark:text-gray-600 text-sm font-light'>
                Click the button below to access the dashboard
              </p>
            </div>

            {/* Simple sign in button */}
            <Button
              size='lg'
              onClick={handleSignIn}
              className='w-full'
            >
              Go to Dashboard
            </Button>

            <div className='text-center'>
              <Link
                href='/sign-up'
                className='text-sm text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors'
              >
                Don&apos;t have an account? Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
