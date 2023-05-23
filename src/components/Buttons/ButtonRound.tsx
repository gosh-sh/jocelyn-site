import classNames from 'classnames'

type TButtonRoundProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  theme: 'light' | 'dark'
  active?: boolean
}

const styles = {
  light: 'bg-gray-light border-black text-black hover:text-gray-light hover:bg-black',
  dark: 'bg-black border-gray-light text-gray-light hover:text-black hover:bg-gray-light',
  active: {
    light: '!text-gray-light !bg-black',
    dark: '!text-black !bg-gray-light',
  },
}

const ButtonRound = (props: TButtonRoundProps) => {
  const { className, children, theme, active, ...rest } = props

  return (
    <button
      className={classNames(
        'border rounded-full transition-all',
        styles[theme],
        active ? styles.active[theme] : null,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export { ButtonRound }
