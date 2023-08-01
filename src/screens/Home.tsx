import i18n from '../i18n/i18n'
import { useTranslation, Trans } from 'react-i18next'
import { Button, ButtonLink } from '../components/Buttons'
import Container from '../components/Container'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import OfferBlock from '../components/OfferBlock'
import { routes } from '../routes'
import { Heading1, Heading2 } from '../components/Headings'
import { usePageScrollTop } from '../hooks/hooks'
import ImageBlock from '../components/ImageBlock'
import { useState } from 'react'

const actions = [
  { content: i18n.t('home_page.actions.action0'), href: routes.project },
  { content: i18n.t('home_page.actions.action1'), href: routes.expertise },
  { content: i18n.t('home_page.actions.action2'), href: routes.sponsor },
]

const HomeScreen = () => {
  usePageScrollTop()
  const { t } = useTranslation()
  const [isSupportOpen, setSupportOpen] = useState<boolean>(false)

  const onSupportToggle = () => {
    setSupportOpen(!isSupportOpen)
  }

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
            <Menu isSupportShow={isSupportOpen} />
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

      <Container className="mt-20 md:mt-44">
        <div className="grid auto-rows-min grid-flow-col gap-4">
          <div className="col-start-1 py-6 lg:py-12">
            <Heading2 className="whitespace-nowrap text-center">
              Community Values
            </Heading2>
          </div>

          <div className="col-start-1 md:col-start-2 row-span-2">
            <ImageBlock
              title="Openness and collaboration"
              image="figure-0.svg"
              className="h-full"
            >
              We believe data is to be open and that science is a common deal that becomes
              way quicker and more effective when people share information instead of
              competing
            </ImageBlock>
          </div>
          <div className="col-start-1 row-span-2">
            <ImageBlock title="Transparency" image="figure-1.svg">
              We stand for transparency of governance processes within our DAO. The
              blockchain technologies we utilise for governance are suited for documenting
              each step of the process, thereby offering an unparalleled degree of safety
              and transparency
            </ImageBlock>
          </div>
          <div className="col-start-1 md:col-start-2 row-span-2">
            <ImageBlock title="Ethical standards">
              We are sensitive to ethics and appreciate greatly the possibility to trust
              each other and not to bring harm to the environment, society, or
              individuals. Science is a responsibility. Research work must comply with the
              international ethics standards.
            </ImageBlock>
          </div>
          <div className="col-start-1 row-span-2">
            <ImageBlock title="Equal access to academic processes">
              We extend equal opportunities to everyone, placing the value on actual
              knowledge and merit, regardless of traditional academic reputation or index,
              geographical location, age or economical or social status.
            </ImageBlock>
          </div>
          <div className="col-start-1 md:col-start-2 row-span-2">
            <ImageBlock title="Academic autonomy and freedom" image="figure-3.svg">
              Our initiative is free from conflicts of interest and will remain unbiased.
              We consider ourselves independent from governments, corporations, or
              institutions. We respect the right of scientists to express diverse opinions
              regarding any element of professional activity.
            </ImageBlock>
          </div>
          <div className="col-start-1 row-span-2">
            <ImageBlock title="Individual approach" image="figure-4.svg">
              We are mostly interested in individuals and try to listen to each other with
              the most attention possible. Any scientist deserves a personalised approach,
              and we consider any research contribution as valuable.
            </ImageBlock>
          </div>
          <div className="col-start-1 md:col-start-2 row-span-2">
            <ImageBlock title="Supporting scientists at risk">
              Helping scientists in hard conditions (e.g., war, refuge, or persecution) is
              one of our most important missions. We consider people in science a treasure
              to be cherished.
            </ImageBlock>
          </div>
          <div className="col-start-1 py-6 text-end">
            <Button
              theme="dark"
              arrow
              className="whitespace-nowrap lg:!inline-flex"
              onClick={onSupportToggle}
            >
              {t('menu.support_us')}
            </Button>
          </div>
        </div>
      </Container>

      <Container className="mt-20 md:mt-72">
        <div className="grid grid-rows-auto grid-flow-col gap-4">
          <div className="col-start-1 row-start-1 py-12">
            <Heading2 className="max-w-[22rem] mx-auto text-center">
              In our community, we do not tolerate
            </Heading2>
          </div>

          <div className="col-start-1 md:col-start-2 row-start-2 md:row-start-1 md:row-span-2">
            <ImageBlock image="figure-5.svg" className="lg:!inline-flex h-full">
              Plagiarism: Any form of copying or using someone else's work without proper
              attribution
            </ImageBlock>
          </div>
          <div className="col-start-1 row-start-3 md:row-start-2 md:row-span-2">
            <ImageBlock image="figure-6.svg">
              Discrimination: We do not tolerate any discrimination based on age, gender,
              origin, personal or professional level, or status. We value equality and
              inclusivity for all members of our community
            </ImageBlock>
          </div>
          <div className="col-start-1 md:col-start-2 row-start-4 md:row-start-3">
            <ImageBlock className="lg:!inline-flex h-full">
              Violence, humiliation, or hatred
            </ImageBlock>
          </div>
          <div className="col-start-1 row-start-5 md:row-start-4 md:row-span-2 md:text-end">
            <ImageBlock className="lg:!inline-flex h-full lg:max-w-[75%]">
              Exclusion members from the DAO solely based on their expressed ideas. Our
              aim is to foster a space where individuals feel comfortable expressing their
              thoughts within the boundaries of mutual respect and understanding
            </ImageBlock>
          </div>
          <div className="col-start-1 md:col-start-2 row-start-6 md:row-start-4">
            <ImageBlock image="figure-3.svg">
              Academic and human dishonesty or cheating
            </ImageBlock>
          </div>
        </div>
      </Container>
    </>
  )
}

export default HomeScreen
