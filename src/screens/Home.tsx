import i18n from '../i18n/i18n'
import { useTranslation, Trans } from 'react-i18next'
import { Button, ButtonLink, ButtonRound } from '../components/Buttons'
import Container from '../components/Container'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import OfferBlock from '../components/OfferBlock'
import { routes } from '../routes'
import { Heading1, Heading2 } from '../components/Headings'
import { useCreateSSF, usePageScrollTop } from '../hooks/hooks'
import ImageBlock from '../components/ImageBlock'
import { useState } from 'react'
import classNames from 'classnames'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const actions = [
  { content: i18n.t('home_page.actions.action0'), href: routes.project },
  { content: i18n.t('home_page.actions.action1'), href: routes.expertise },
  { content: i18n.t('home_page.actions.action2'), href: routes.sponsor },
]

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    description: yup.string().required(),
  })
  .required()

const HomeScreen = () => {
  usePageScrollTop()
  const { t } = useTranslation()
  const [isSupportOpen, setSupportOpen] = useState<boolean>(false)
  const [isSSFOpen, setSSFOpen] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) })
  const { createSSF } = useCreateSSF()

  const onSupportToggle = () => {
    setSupportOpen(!isSupportOpen)
  }

  const onSSFToggle = () => {
    setSSFOpen(!isSSFOpen)
  }

  const onSSFSubmit = async (data: any) => {
    try {
      await createSSF(data)
      reset()
      alert('Success!')
    } catch (e: any) {
      console.error(e.message)
      alert(e.message)
    }
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

      <Container className="mt-36">
        <div className="flex flex-wrap justify-between gap-x-4 gap-y-16">
          <div className="basis-full lg:basis-5/12">
            <Heading2 className="max-w-full lg:max-w-[25rem]">
              Scientifiques Sans Frontières: SSF
            </Heading2>
            <div className="mt-4 text-xl max-w-full lg:max-w-[27.25rem]">
              Introducing SSF, a unified platform for scientists to share their expertise.
            </div>

            <hr className="my-10 border-black" />

            <h3 className="text-2xl">Why is it crucial?</h3>
            <div className="text-lg lg:text-base mt-4">
              Scientists worldwide often struggle to secure adequate financial backing.
              While grants, universities, and NGOs typically offer support, many
              researchers lack the means to monetize their expertise offering free
              consultations and spending precious time.
            </div>

            <div className="mt-8">
              <Button
                theme="dark"
                arrow
                className="whitespace-nowrap"
                onClick={onSSFToggle}
              >
                Fill the form
              </Button>
            </div>
          </div>
          <div className="basis-full lg:basis-6/12 border border-black rounded-block px-6 lg:px-12 py-12 lg:py-16">
            <div className="text-xl">
              SSF aims to provide a legally sound decentralized space for knowledge
              exchange, irrespective of a scientist's status or age
            </div>
            <div className="mt-8 text-lg">
              Imagine it as a Patreon for Scientists, featuring tiers that grant general
              public access to services like
            </div>
            <div className="mt-20 flex flex-wrap items-start justify-between gap-x-4 gap-y-8">
              <div className="basis-5/12 md:basis-0 grow text-start md:text-center">
                <div className="text-6xl">
                  <i className="icon icon-qa" />
                </div>
                <div className="mt-4 text-lg">
                  Q&A
                  <br />
                  sessions
                </div>
              </div>
              <div className="basis-5/12 md:basis-0 grow text-start md:text-center">
                <div className="text-6xl">
                  <i className="icon icon-virtual" />
                </div>
                <div className="mt-4 text-lg">
                  One-on-one
                  <br />
                  virtual meetings
                </div>
              </div>
              <div className="basis-5/12 md:basis-0 grow text-start md:text-center">
                <div className="text-6xl">
                  <i className="icon icon-mentor" />
                </div>
                <div className="mt-4 text-lg">
                  Personal
                  <br />
                  mentoring
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="mt-20 md:mt-64">
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

      {/* SSF modal */}
      <div
        className={classNames(
          'fixed top-0 right-0 w-screen lg:w-6/12 xl:w-5/12 h-screen bg-black overflow-auto',
          'flex flex-col gap-y-4 z-10',
          'transition-translate duration-200 lg:rounded-l-3xl',
          isSSFOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="grow p-8 md:p-16 lg:py-8 xl:p-16">
          <div className="relative">
            <div
              className={classNames(
                'absolute right-0 top-0 md:-right-10 md:-top-10 text-end mb-6',
              )}
            >
              <ButtonRound
                theme="dark"
                className="h-[3.375rem] w-[3.375rem] text-lg"
                onClick={onSSFToggle}
              >
                <div className="flex items-center justify-center w-full h-full">
                  <i className={classNames('icon icon-arrow-end rotate-90')} />
                </div>
              </ButtonRound>
            </div>
            <Heading2 className="text-gray-light">Why are you interested?</Heading2>
          </div>

          <div className="mt-10">
            <form onSubmit={handleSubmit(onSSFSubmit)}>
              <div>
                <input
                  {...register('name')}
                  type="text"
                  className="border border-gray-light rounded-[3.5rem] px-9 py-4 bg-black text-gray-light w-full"
                  placeholder="Name"
                  autoComplete="off"
                />
                <p className="text-sm text-gray-light mt-1 pl-6">
                  {errors.name?.message?.toString()}
                </p>
              </div>
              <div className="mt-6">
                <input
                  {...register('email')}
                  type="email"
                  className="border border-gray-light rounded-[3.5rem] px-9 py-4 bg-black text-gray-light w-full"
                  placeholder="Email"
                  autoComplete="off"
                />
                <p className="text-sm text-gray-light mt-1 pl-6">
                  {errors.email?.message?.toString()}
                </p>
              </div>
              <div className="mt-6">
                <textarea
                  {...register('description')}
                  className="border border-gray-light rounded-[2rem] px-9 py-9 bg-black text-gray-light w-full"
                  placeholder="Describe your interest in that"
                  autoComplete="off"
                  rows={8}
                />
                <p className="text-sm text-gray-light mt-1 pl-6">
                  {errors.description?.message?.toString()}
                </p>
              </div>
              <div className="mt-16">
                <Button
                  type="submit"
                  theme="dark"
                  className={classNames(
                    'px-6 py-4 !text-[#616264] w-full',
                    'hover:!text-gray-light hover:!bg-transparent',
                    'whitespace-nowrap',
                  )}
                  disabled={isSubmitting}
                  loading={isSubmitting}
                >
                  Send request
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /SSF modal */}
    </>
  )
}

export default HomeScreen
