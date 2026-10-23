import { useEffect, useState } from 'react'
import type {
  AnchorHTMLAttributes,
  ReactNode,
} from 'react'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string
  children?: ReactNode
}

type NavClass =
  | string
  | ((state: { isActive: boolean }) => string)

export function navigate(to: string) {
  window.history.pushState({}, '', to)

  window.dispatchEvent(
    new PopStateEvent('popstate')
  )

  window.scrollTo({
    top: 0,
    behavior: 'auto',
  })
}

export function Link({
  to,
  children,
  className,
  onClick,
  ...props
}: LinkProps) {
  return (
    <a
      href={to}
      className={className}
      onClick={(event) => {
        if (
          !event.metaKey &&
          !event.ctrlKey &&
          !event.shiftKey &&
          event.button === 0
        ) {
          event.preventDefault()
          navigate(to)
        }

        onClick?.(event)
      }}
      {...props}
    >
      {children}
    </a>
  )
}

export function usePath() {
  const [path, setPath] = useState(
    window.location.pathname
  )

  useEffect(() => {
    const update = () => {
      setPath(window.location.pathname)
    }

    window.addEventListener('popstate', update)

    return () => {
      window.removeEventListener(
        'popstate',
        update
      )
    }
  }, [])

  return path
}

export function NavLink({
  to,
  children,
  className,
  ...props
}: Omit<LinkProps, 'className'> & {
  className?: NavClass
}) {
  const path = usePath()

  const active =
    path === to ||
    (to !== '/' && path.startsWith(to))

  const resolved =
    typeof className === 'function'
      ? className({ isActive: active })
      : className

  return (
    <Link
      to={to}
      className={resolved}
      {...props}
    >
      {children}
    </Link>
  )
}