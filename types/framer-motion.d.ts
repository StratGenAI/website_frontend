import 'react'

declare module 'framer-motion' {
  interface MotionProps extends React.HTMLAttributes<HTMLElement> {
    className?: string
    onClick?: React.MouseEventHandler<HTMLElement>
    children?: React.ReactNode
    href?: string
    target?: string
    rel?: string
    type?: string
    disabled?: boolean
    id?: string
    role?: string
    'aria-label'?: string
  }
}
