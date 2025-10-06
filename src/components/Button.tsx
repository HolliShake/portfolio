import { forwardRef, type ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'default' | 'soft' | 'outline'
type ButtonColor = 'primary' | 'warning' | 'success' | 'info' | 'error'
type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  color?: ButtonColor
  size?: ButtonSize
  fullWidth?: boolean
  loading?: boolean
}

const resolveColor = (color: ButtonColor): { bg: string; fg: string } => {
  switch (color) {
    case 'warning':
      return { bg: 'var(--bg-warning)', fg: 'var(--text-warning)' }
    case 'success':
      return { bg: 'var(--bg-success)', fg: 'var(--text-success)' }
    case 'error':
      return { bg: 'var(--bg-error)', fg: 'var(--text-error)' }
    case 'info':
      // Cyan accent to complement cobalt palette
      return { bg: '#00e5ff', fg: '#001a1a' }
    case 'primary':
    default:
      return { bg: 'var(--bg-primary)', fg: 'var(--text-primary)' }
  }
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-5 text-base',
}

function composeVariantClasses(variant: ButtonVariant) {
  switch (variant) {
    case 'outline':
      return 'bg-transparent border'
    case 'soft':
      return 'glass-surface border'
    case 'default':
    default:
      return 'border border-transparent'
  }
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'default',
    color = 'primary',
    size = 'md',
    fullWidth = false,
    loading = false,
    disabled,
    className = '',
    children,
    ...props
  },
  ref
) {
  const { bg, fg } = resolveColor(color)

  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors hover:opacity-90 focus:outline-none focus-visible:ring-2 hover-raise'
  const sizing = sizeClasses[size]
  const variantClasses = composeVariantClasses(variant)
  const width = fullWidth ? 'w-full' : ''
  const state = (disabled || loading) ? 'opacity-60 cursor-not-allowed' : ''

  // Use CSS variables to pipe colors into Tailwind arbitrary utilities
  const style = {
    '--btn-bg': bg,
    '--btn-fg': fg,
    color: variant === 'default' ? 'var(--btn-fg)' : undefined,
    borderColor: variant !== 'default' ? (bg as string) : undefined,
  } as unknown as React.CSSProperties

  const colorClasses = variant === 'default'
    ? 'bg-[var(--btn-bg)] text-[var(--btn-fg)] ring-[var(--btn-bg)]'
    : variant === 'soft'
      ? 'text-[var(--btn-bg)] ring-[var(--btn-bg)]'
      : 'text-[var(--btn-bg)] bg-transparent ring-[var(--btn-bg)]'

  return (
    <button
      ref={ref}
      className={[base, sizing, width, variantClasses, colorClasses, state, className].filter(Boolean).join(' ')}
      style={style}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
        </svg>
      ) : null}
      {children}
    </button>
  )
})

export default Button


