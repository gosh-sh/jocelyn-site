import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { routes } from '../routes'

type TLogoProps = {
  theme: 'dark' | 'light'
}

const styles = {
  dark: 'text-black',
  light: 'text-gray-light',
}

const Logo = (props: TLogoProps) => {
  const { theme } = props

  return (
    <Link to={routes.home} className="inline-flex flex-nowrap items-center gap-x-4">
      <div className="w-11 overflow-hidden">
        <img alt="logo" src={`/images/logo-${theme}.svg`} />
      </div>
      <div className={classNames('font-light text-[2.75rem]', styles[theme])}>
        Jocelyn
      </div>
    </Link>
  )
}

export default Logo
