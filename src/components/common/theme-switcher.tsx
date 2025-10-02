import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/context/theme-provider'

interface ThemeSwitcherProps {
  invertColors?: boolean
}

export function ThemeSwitcher({ invertColors = false }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const colorClass = invertColors
    ? 'text-white dark:text-black'
    : 'text-black dark:text-white'

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={toggleTheme}
      className={`rounded-full border-0 bg-white/10 dark:bg-white/10 hover:bg-white/20 dark:hover:bg-white/20 ${colorClass}`}
      aria-label='Toggle theme'
    >
      {theme === 'dark' ? (
        <Moon className='h-5 w-5' />
      ) : (
        <Sun className='h-5 w-5' />
      )}
    </Button>
  )
}