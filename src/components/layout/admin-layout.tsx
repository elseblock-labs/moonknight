'use client'

import { getCookie } from '@/lib/cookies'
import { cn } from '@/lib/utils'
import { LayoutProvider } from '@/context/layout-provider'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from './app-sidebar-new'
import { Header } from './header'

type AdminLayoutProps = {
  children?: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const cookieState = getCookie('sidebar_state')
  const defaultOpen = cookieState === 'true' ? true : false

  return (
    <LayoutProvider>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <SidebarInset
          className={cn(
            '@container/content',
            'flex flex-col',
            'h-screen overflow-hidden',
            'has-[[data-layout=fixed]]:h-svh',
            'peer-data-[variant=inset]:has-[[data-layout=fixed]]:h-[calc(100svh-(var(--spacing)*4))]'
          )}
        >
          <Header />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </LayoutProvider>
  )
}
