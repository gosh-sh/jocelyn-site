import classNames from 'classnames'
import Logo from './Logo'
import Menu from './Menu'
import { Heading1 } from './Headings'
import { Trans } from 'react-i18next'

type THeaderProps = React.HTMLAttributes<HTMLDivElement>

const Header = (props: THeaderProps) => {
  const { children } = props

  return (
    <div className="relative lg:pb-32">
      <div className="flex flex-wrap items-start gap-x-14">
        <div className="header-sub grow mt-20 py-8 pr-8 border-y border-r border-black rounded-r-block">
          <div>
            <Logo theme="dark" />
          </div>
          <div className="mt-6 md:mt-60 mb-60 md:mb-0">
            <Heading1>
              <Trans key="common_header">
                Jocelyn Open
                <br />
                Science Community
              </Trans>
            </Heading1>
          </div>
        </div>

        <div className="block w-full my-9 xl:my-0 xl:absolute xl:top-[73%]">
          <Menu />
        </div>

        <div
          className={classNames(
            'flex flex-col justify-end overflow-hidden',
            'max-w-full xl:max-w-[31.625rem] min-h-0 xl:min-h-[46.6875rem]',
            'bg-black rounded-b-2xl rounded-t-2xl xl:rounded-t-none',
            'px-6 lg:px-12 pb-14 xl:pb-48 pt-14 xl:pt-4 text-gray-light',
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Header
