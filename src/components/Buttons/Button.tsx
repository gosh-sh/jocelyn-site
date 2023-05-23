import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  theme: 'light' | 'dark'
  arrow?: boolean
  active?: boolean
  loading?: boolean
}

const btnStyles = [
  'group flex flex-wrap items-center py-3 px-7 text-lg gap-4',
  'border border-black rounded-3xl transition-all disabled:pointer-events-none',
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

const Button = (props: TButtonProps) => {
  const { theme, children, arrow, className, active, loading, ...rest } = props
  const { t } = useTranslation()

  return (
    <button
      className={classNames(
        ...btnStyles,
        themeStyles[theme],
        active ? themeStyles.active[theme] : null,
        className,
      )}
      {...rest}
    >
      <div className="grow">{loading ? t('common_messages.wait') : children}</div>
      {!loading && arrow && (
        <div className={classNames(...iconStyles)}>
          <i className="icon icon-arrow align-middle" />
        </div>
      )}
    </button>
  )
}

export { Button }
