import { type SVGProps } from 'react'
import { cn } from '@/lib/utils'

export function Logo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      id='moonnight-logo'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      height='32'
      width='32'
      fill='none'
      className={cn('size-8', className)}
      {...props}
    >
      <title>MoonNight</title>

      {/* Outer circle with solid background and white border */}
      <circle cx='16' cy='16' r='15' fill='#000000'/>
      <circle cx='16' cy='16' r='14' fill='#000000' stroke='#ffffff' strokeWidth='1.5'/>

      {/* Connected "i" and "w" design - centered */}

      {/* "i" dot */}
      <circle cx='10' cy='11' r='2' fill='#ffffff'/>

      {/* "i" stem connecting to "w" */}
      <path
        d='M 10 15 L 13 22'
        stroke='#ffffff'
        strokeWidth='3'
        strokeLinecap='round'
      />

      {/* Connected "w" shape - three strokes forming W */}
      {/* Middle stroke of W */}
      <path
        d='M 13 22 L 16 15 L 19 22'
        stroke='#ffffff'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
      />

      {/* Right stroke of W */}
      <path
        d='M 19 22 L 23 13'
        stroke='#ffffff'
        strokeWidth='3'
        strokeLinecap='round'
      />
    </svg>
  )
}
