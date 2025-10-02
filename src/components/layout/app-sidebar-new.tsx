import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Logo } from '@/assets/logo'
import { LayoutDashboard, FileText, Users, Settings } from 'lucide-react'

const menuItems = [
  {
    title: 'Overview',
    items: [
      {
        title: 'Dashboard',
        url: '/dashboard',
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: 'Manage',
    items: [
      {
        title: 'Items',
        url: '/items',
        icon: FileText,
      },
      {
        title: 'Users',
        url: '/users',
        icon: Users,
      },
      {
        title: 'Settings',
        url: '/settings',
        icon: Settings,
      },
    ],
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible='icon' variant='sidebar'>
      <SidebarHeader>
        <div className='flex items-center justify-start gap-2 px-2 py-2 group-data-[collapsible=icon]:justify-center transition-all duration-200 min-h-[3rem]'>
          <Logo className='size-9 flex-shrink-0 transition-all duration-200' />
          <span className='font-light text-lg whitespace-nowrap group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:w-0 group-data-[collapsible=icon]:overflow-hidden transition-all duration-200'>
            App Name
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <TooltipProvider delayDuration={0}>
          {menuItems.map((group) => (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuButton asChild tooltip={item.title}>
                          <a href={item.url} className='flex items-center'>
                            <item.icon className='h-5 w-5' />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </TooltipTrigger>
                    </Tooltip>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          ))}
        </TooltipProvider>
      </SidebarContent>

      <SidebarFooter>
        <div className='px-3 py-2 text-xs text-muted-foreground group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:h-0 group-data-[collapsible=icon]:overflow-hidden transition-all duration-200'>
          © 2025 App Name
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
