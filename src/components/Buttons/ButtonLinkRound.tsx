import classNames from 'classnames'
import { Link } from 'react-router-dom'

type TButtonRoundProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  theme: 'light' | 'dark'
  href: string
  active?: boolean
  external?: boolean
}

const styles = {
  light: 'bg-gray-light border-black text-black hover:text-gray-light hover:bg-black',
  dark: 'bg-black border-gray-light text-gray-light hover:text-black hover:bg-gray-light',
  active: {
    light: '!text-gray-light !bg-black',
    dark: '!text-black !bg-gray-light',
  },
}

const ButtonLinkRound = (props: TButtonRoundProps) => {
  const { className, children, theme, href, active, external, ...rest } = props

  if (external) {
    return (
      <a
        className={classNames(
          'inline-block items-center border rounded-full transition-all',
          styles[theme],
          active ? styles.active[theme] : null,
          className,
        )}
        href={href}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      className={classNames(
        'inline-block items-center border rounded-full transition-all',
        styles[theme],
        active ? styles.active[theme] : null,
        className,
      )}
      to={href}
    >
      {children}
    </Link>
  )
}

export { ButtonLinkRound }
