import classNames from 'classnames'
import { Link } from 'react-router-dom'

type TButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  theme: 'light' | 'dark'
  href: string
  arrow?: boolean
  active?: boolean
  external?: boolean
}

const btnStyles = [
  'group flex flex-wrap items-center py-3 px-7 text-lg gap-4',
  'border border-black rounded-3xl transition-all',
]

const iconStyles = [
  'grow lg:shrink text-xs font-light text-end',
  '-translate-x-1 group-hover:translate-x-1 transition-all',
]

const themeStyles = {
  light: 'bg-gray-light text-black hover:bg-black hover:text-gray-light',
  dark: 'bg-black text-gray-light hover:bg-gray-light hover:text-black',
  active: {
    light: '!text-gray-light !bg-black',
    dark: '!text-black !bg-gray-light',
  },
}

const ButtonLink = (props: TButtonProps) => {
  const { theme, children, arrow, className, href, external, active, ...rest } = props

  if (external) {
    return (
      <a
        href={href}
        className={classNames(
          ...btnStyles,
          themeStyles[theme],
          active ? themeStyles.active[theme] : null,
          className,
        )}
        {...rest}
      >
        <div className="grow">{children}</div>
        {arrow && (
          <div className={classNames(...iconStyles)}>
            <i className="icon icon-arrow align-middle" />
          </div>
        )}
      </a>
    )
  }

  return (
    <Link
      to={href}
      className={classNames(
        ...btnStyles,
        themeStyles[theme],
        active ? themeStyles.active[theme] : null,
        className,
      )}
    >
      <div className="grow">{children}</div>
      {arrow && (
        <div className={classNames(...iconStyles)}>
          <i className="icon icon-arrow align-middle" />
        </div>
      )}
    </Link>
  )
}

export { ButtonLink }
