import i18n from '../i18n/i18n'
import { useTranslation, Trans } from 'react-i18next'
import { ButtonLink } from '../components/Buttons'
import Container from '../components/Container'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import OfferBlock from '../components/OfferBlock'
import { routes } from '../routes'
import { Heading1, Heading2 } from '../components/Headings'
import { usePageScrollTop } from '../hooks/hooks'

const actions = [
  { content: i18n.t('home_page.actions.action0'), href: routes.project },
  { content: i18n.t('home_page.actions.action1'), href: routes.expertise },
  { content: i18n.t('home_page.actions.action2'), href: routes.sponsor },
]

const HomeScreen = () => {
  usePageScrollTop()
  const { t } = useTranslation()
  return (
    <>
      <Container className="header-home z-1 lg:min-h-fit">
        <div className="pt-8 md:pt-20 pb-20 lg:pb-60">
          <div className="py-8">
            <div>
              <Logo theme="dark" />
            </div>
            <div className="mt-8 md:mt-40">
              <Heading1>
                <Trans i18nKey="home_page.header" />
                <div className="ml-0 md:ml-10 mt-4 lg:mt-0 inline-block font-normal text-lg lg:text-xl align-middle">
                  <Trans i18nKey="home_page.subheader" />
                </div>
              </Heading1>
            </div>
          </div>

          <div className="mt-48 lg:mt-20">
            <Menu />
          </div>
        </div>
      </Container>

      <Container>
        <OfferBlock />
      </Container>

      <Container className="mt-24">
        <Heading2>{t('home_page.actions.title')}</Heading2>
        <div className="text-xl mt-2">{t('home_page.actions.subtitle')}</div>
        <div className="flex flex-col gap-4 mt-14">
          {actions.map(({ content, href }, index) => (
            <div key={index}>
              <ButtonLink
                theme="light"
                arrow
                href={href}
                className="w-full text-start !py-10 lg:!py-14 !text-2xl rounded-[3.5rem]"
              >
                {content}
              </ButtonLink>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}

export default HomeScreen
