'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { ThemeSwitcher } from '@/components/common/theme-switcher'
import { Input } from '@/components/ui/input'
import { Search, User, Settings, LogOut } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

// Helper component that safely renders SidebarTrigger
function SafeSidebarTrigger() {
  return (
    <>
      <SidebarTrigger variant='outline' className='max-md:scale-125' />
      <Separator orientation='vertical' className='h-6' />
    </>
  )
}

// User dropdown component
function UserDropdown() {
  const router = useRouter()

  const handleLogout = () => {
    router.push('/')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center gap-2 hover:bg-accent rounded-md px-2 py-1.5 transition-colors'>
        <Avatar className='h-8 w-8'>
          <AvatarFallback className='bg-primary text-primary-foreground'>
            <User className='h-4 w-4' />
          </AvatarFallback>
        </Avatar>
        <div className='flex flex-col items-start max-md:hidden'>
          <span className='text-sm font-medium'>User Name</span>
          <span className='text-xs text-muted-foreground'>user@example.com</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-56'>
        <DropdownMenuLabel>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium'>User Name</p>
            <p className='text-xs text-muted-foreground'>user@example.com</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push('/dashboard')}>
          <Settings className='mr-2 h-4 w-4' />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className='mr-2 h-4 w-4' />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

type HeaderProps = React.HTMLAttributes<HTMLElement> & {
  fixed?: boolean
  ref?: React.Ref<HTMLElement>
}

export function Header({ className, fixed, children, ...props }: HeaderProps) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setOffset(document.body.scrollTop || document.documentElement.scrollTop)
    }

    // Add scroll listener to the body
    document.addEventListener('scroll', onScroll, { passive: true })

    // Clean up the event listener on unmount
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'z-50 h-16',
        fixed && 'header-fixed peer/header sticky top-0 w-[inherit]',
        offset > 10 && fixed ? 'shadow' : 'shadow-none',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'relative flex h-full items-center gap-3 px-6 py-4 sm:gap-4 lg:px-8',
          offset > 10 &&
            fixed &&
            'after:bg-background/20 after:absolute after:inset-0 after:-z-10 after:backdrop-blur-lg'
        )}
      >
        <SafeSidebarTrigger />

        {/* Search Box */}
        <div className='relative max-w-xs w-64'>
          <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground' />
          <Input
            type='search'
            placeholder='Search...'
            className='pl-9 h-9'
          />
        </div>

        <div className='flex-1'>{children}</div>

        {/* User Dropdown */}
        <UserDropdown />

        <Separator orientation='vertical' className='h-6' />

        {/* Theme Switcher */}
        <ThemeSwitcher />
      </div>
    </header>
  )
}
