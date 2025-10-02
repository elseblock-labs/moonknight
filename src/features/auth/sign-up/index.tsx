'use client'

import { Logo } from '@/assets/logo'
import { ThemeSwitcher } from '@/components/common/theme-switcher'
import { CheckCircle2, Zap, Shield } from 'lucide-react'

export function SignUp() {
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
            Start your journey today
          </h2>

          <p className='text-gray-600 dark:text-gray-300 mb-8 font-light'>
            Create your free account and join thousands of users.
          </p>

          <div className='space-y-4'>
            <div className='flex items-start gap-3'>
              <CheckCircle2 className='h-5 w-5 mt-0.5' />
              <div>
                <h3 className='font-normal mb-1'>Feature One</h3>
                <p className='text-sm text-gray-600 dark:text-gray-300 font-light'>
                  Description of feature one goes here
                </p>
              </div>
            </div>

            <div className='flex items-start gap-3'>
              <Zap className='h-5 w-5 mt-0.5' />
              <div>
                <h3 className='font-normal mb-1'>Feature Two</h3>
                <p className='text-sm text-gray-600 dark:text-gray-300 font-light'>
                  Description of feature two goes here
                </p>
              </div>
            </div>

            <div className='flex items-start gap-3'>
              <Shield className='h-5 w-5 mt-0.5' />
              <div>
                <h3 className='font-normal mb-1'>Feature Three</h3>
                <p className='text-sm text-gray-600 dark:text-gray-300 font-light'>
                  Description of feature three goes here
                </p>
              </div>
            </div>
          </div>
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
          <div className='mx-auto flex w-full max-w-sm flex-col justify-center space-y-2'>
            <div className='flex flex-col space-y-2 text-start'>
              <h2 className='text-lg font-semibold tracking-tight text-white dark:text-black'>Create an account</h2>
              <p className='text-gray-300 dark:text-gray-600 text-sm font-light'>
                Enter your email and password below <br />
                to create your new account
              </p>
            </div>
            {/* Replace with your own signup form */}
            <div className='mt-4 p-4 border border-gray-700 dark:border-gray-300 rounded-md'>
              <p className='text-gray-400 dark:text-gray-600 text-sm'>
                Add your signup form component here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
