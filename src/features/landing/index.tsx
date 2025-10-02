'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'
import { ThemeSwitcher } from '@/components/common/theme-switcher'
import { Logo } from '@/assets/logo'

export function Landing() {

  return (
    <div className='min-h-screen bg-background'>
      {/* Header */}
      <header className='fixed top-0 left-0 right-0 z-50 transition-all duration-300'>
        <div className='mx-auto mt-4 max-w-4xl border border-gray-200 dark:border-white/10 bg-background/60 backdrop-blur-xl px-6 transition-all duration-300'>
          <div className='flex items-center justify-between h-14'>
            {/* Logo */}
            <div className='flex items-center gap-3'>
              <Logo className='size-7' />
              <span className='font-light text-xl'>App Name</span>
            </div>

            {/* Navigation and Actions */}
            <div className='flex items-center gap-4'>
              <nav className='hidden md:flex items-center gap-6 mr-4'>
                <a href='#features' className='text-sm font-light hover:text-primary transition-colors'>
                  Features
                </a>
                <a href='#about' className='text-sm font-light hover:text-primary transition-colors'>
                  About
                </a>
              </nav>

              <ThemeSwitcher />

              <Button
                size='sm'
                variant='outline'
                asChild
                className='font-light'
              >
                <Link href='/sign-in'>Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='relative overflow-hidden pt-16'>
        <div className='container mx-auto px-4 py-24 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className='mb-4' variant='secondary'>
                Get Started
              </Badge>
            </motion.div>
            <motion.h1
              className='text-5xl font-light tracking-tight sm:text-6xl'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Welcome to{' '}
              <span className='text-primary'>Your App</span>
            </motion.h1>
            <motion.p
              className='mx-auto mt-6 max-w-2xl text-lg text-muted-foreground'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your tagline or description goes here. Replace with your own content.
            </motion.p>
            <motion.div
              className='mt-10 flex justify-center gap-4'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size='lg' asChild>
                <Link href='/sign-up'>
                  Get Started
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button size='lg' variant='outline' asChild>
                <Link href='/sign-in'>Sign In</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Background decoration */}
        <div className='absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl'>
          <div className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-blue-600 opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]' />
        </div>
      </section>

      {/* Features Section Placeholder */}
      <section id='features' className='py-24'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-12'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-3xl font-light tracking-tight'>Features Section</h2>
            <p className='text-muted-foreground mt-2 font-light'>Add your feature cards here</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24'>
        <div className='container mx-auto px-4 text-center sm:px-6 lg:px-8'>
          <motion.h2
            className='text-3xl font-light tracking-tight'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className='mx-auto mt-4 max-w-2xl text-muted-foreground'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join us today
          </motion.p>
          <motion.div
            className='mt-10 flex justify-center gap-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size='lg' asChild>
              <Link href='/sign-up'>Sign Up Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-border py-8'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center text-sm text-muted-foreground'>
            <p>
              Made by{' '}
              <a
                href='https://elseblock.io'
                target='_blank'
                rel='noopener noreferrer'
                className='font-medium text-foreground hover:text-primary transition-colors'
              >
                elseblock.io
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
