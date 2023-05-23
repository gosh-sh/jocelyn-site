import classNames from 'classnames'
import Container from './Container'
import Logo from './Logo'
import { ButtonLinkRound } from './Buttons'
import { social } from '../routes'

type TFooterProps = React.HTMLAttributes<HTMLDivElement>

const Footer = (props: TFooterProps) => {
  const { className } = props

  return (
    <Container
      className={classNames(
        'bg-black py-16 mt-28 rounded-t-block overflow-hidden',
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-8">
        <div>
          <Logo theme="light" />
        </div>
        <div className="grow flex items-center justify-center gap-2 lg:gap-4">
          {social.map(({ icon, href }, index) => (
            <div key={index} className="h-10 lg:h-16 w-10 lg:w-16 overflow-hidden">
              <ButtonLinkRound
                theme="dark"
                href={href}
                external
                target="_blank"
                rel="noreferrer"
                className="w-full h-full"
              >
                <div className="flex items-center justify-center w-full h-full">
                  <i className={classNames('text-xl lg:text-3xl icon', `icon-${icon}`)} />
                </div>
              </ButtonLinkRound>
            </div>
          ))}
        </div>
        <div className="pt-16 lg:pt-0">
          <a href="mailto:jocelyn.dao@gosh.sh" className="text-gray-light text-2xl">
            jocelyn.dao@gosh.sh
          </a>
        </div>
      </div>
    </Container>
  )
}

export default Footer
