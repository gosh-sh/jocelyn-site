import { Trans, useTranslation } from 'react-i18next'
import i18n from '../i18n/i18n'
import { Button } from '../components/Buttons'
import Container from '../components/Container'
import Header from '../components/Header'
import { Heading2 } from '../components/Headings'
import ImageBlock from '../components/ImageBlock'
import OfferBlock from '../components/OfferBlock'
import {
  SecondaryBlock,
  SecondaryBlockLeft,
  SecondaryBlockRight,
} from '../components/SecondaryBlock'
import TeamBlock from '../components/TeamBlock'
import {
  useCreateReviewer,
  useJoinDao,
  usePageScrollTop,
  useScrollToRef,
} from '../hooks/hooks'
import { useRef } from 'react'
import Menu from '../components/Menu'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const expert = [
  i18n.t('expertise_page.expert.block0'),
  i18n.t('expertise_page.expert.block1'),
  i18n.t('expertise_page.expert.block2'),
  i18n.t('expertise_page.expert.block3'),
]

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    skill: yup.string().required(),
    bio: yup.string().required(),
  })
  .required()

const ExpertiseScreen = () => {
  usePageScrollTop()
  const { joinDao, isSubmitting } = useJoinDao()
  const { t } = useTranslation()
  const formRef = useRef<HTMLDivElement>(null)
  const scrollToRef = useScrollToRef()
  const { createReviewer } = useCreateReviewer()
  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(schema),
  })

  const onReviewerFormScrollTo = () => {
    const current = formRef.current
    if (current) {
      scrollToRef(current, { top: current.offsetTop - 100 })
    }
  }

  const onReviewerFormSubmit = async (data: any) => {
    try {
      await createReviewer(data)
      reset()
      alert(t('common_messages.reviewer_submitted'))
    } catch (e: any) {
      console.error(e.message)
      alert(e.message)
    }
  }

  return (
    <>
      <Container>
        <Header
          menu={
            <Menu
              btnAfter={
                <Button
                  theme="light"
                  className="w-full lg:w-auto"
                  onClick={onReviewerFormScrollTo}
                >
                  {t('menu.reviewer')}
                </Button>
              }
            />
          }
        >
          <h2 className="text-2xl">{t('expertise_page.subheader.title')}</h2>
          <div className="mt-8 text-xl">{t('expertise_page.subheader.text0')}</div>
        </Header>
      </Container>

      <Container className="mt-20 md:mt-36">
        <OfferBlock />
      </Container>

      <Container className="mt-20 md:mt-36">
        <SecondaryBlock>
          <SecondaryBlockLeft
            icon
            title={
              <Trans key="expertise_page.shield.title">
                One of the
                <br />
                main golas
              </Trans>
            }
          />
          <SecondaryBlockRight>{t('expertise_page.shield.content')}</SecondaryBlockRight>
        </SecondaryBlock>
      </Container>

      <Container className="mt-20 md:mt-36">
        <div className="grid lg:grid-rows-2 grid-flow-row lg:grid-flow-col gap-4">
          <div className="row-span-2 my-auto">
            <div>
              <Heading2>{t('expertise_page.expert.title')}</Heading2>
            </div>
            <div className="mt-6 lg:mt-2 text-xl">
              {t('expertise_page.expert.subtitle')}
            </div>
            <div className="mt-10 mb-10 lg:mt-16 lg:mb-0">
              <Button
                theme="dark"
                arrow
                className="whitespace-nowrap"
                disabled={isSubmitting}
                loading={isSubmitting}
                onClick={joinDao}
              >
                {t('common_btns.join_us')}
              </Button>
            </div>
          </div>
          {expert.map((content, index) => (
            <div key={index}>
              <ImageBlock className="min-h-[22.75rem]">{content}</ImageBlock>
            </div>
          ))}
        </div>
      </Container>

      <Container className="mt-20 md:mt-36" ref={formRef}>
        <SecondaryBlock className="!flex-col !items-start">
          <Heading2>{t('expertise_page.reviewer_form.title')}</Heading2>
          <div className="mt-10 w-full">
            <form onSubmit={handleSubmit(onReviewerFormSubmit)}>
              <div className="flex flex-wrap items-start gap-8">
                <div className="basis-full lg:basis-5/12 grow">
                  <input
                    {...register('name')}
                    className="border border-gray-light rounded-[3.5rem] px-9 py-4 bg-black w-full"
                    placeholder={t('expertise_page.reviewer_form.field_name').toString()}
                    autoComplete="off"
                  />
                  <p className="text-sm mt-1 pl-6">
                    {formState.errors.name?.message?.toString()}
                  </p>
                </div>
                <div className="basis-full lg:basis-5/12 grow">
                  <input
                    {...register('email')}
                    className="border border-gray-light rounded-[3.5rem] px-9 py-4 bg-black w-full"
                    placeholder={t('expertise_page.reviewer_form.field_email').toString()}
                    autoComplete="off"
                  />
                  <p className="text-sm mt-1 pl-6">
                    {formState.errors.email?.message?.toString()}
                  </p>
                </div>
                <div className="basis-full lg:basis-5/12 grow">
                  <textarea
                    {...register('skill')}
                    className="border border-gray-light rounded-3xl px-9 py-4 bg-black w-full"
                    placeholder={t('expertise_page.reviewer_form.field_skill').toString()}
                    autoComplete="off"
                    rows={8}
                  />
                  <p className="text-sm mt-1 pl-6">
                    {formState.errors.skill?.message?.toString()}
                  </p>
                </div>
                <div className="basis-full lg:basis-5/12 grow">
                  <textarea
                    {...register('bio')}
                    className="border border-gray-light rounded-3xl px-9 py-4 bg-black w-full"
                    placeholder={t('expertise_page.reviewer_form.field_bio').toString()}
                    autoComplete="off"
                    rows={8}
                  />
                  <p className="text-sm mt-1 pl-6">
                    {formState.errors.bio?.message?.toString()}
                  </p>
                </div>
              </div>
              <div className="mt-12">
                <Button
                  type="submit"
                  theme="dark"
                  className="px-6 py-4 !text-[#616264] hover:!text-gray-light hover:!bg-transparent mx-auto"
                  disabled={formState.isSubmitting}
                  loading={formState.isSubmitting}
                >
                  {t('project_page.submit_form.btn_submit')}
                </Button>
              </div>
            </form>
          </div>
        </SecondaryBlock>
      </Container>

      <Container className="mt-20 md:mt-36">
        <div className="grid auto-rows-min grid-flow-col gap-4">
          <div className="col-start-1 row-start-1 py-6 lg:py-12">
            <Heading2 className="whitespace-nowrap">
              {t('expertise_page.howitworks.title')}
            </Heading2>
          </div>

          <div className="col-start-1 md:col-start-2 row-start-2 md:row-start-1 md:row-span-2">
            <ImageBlock image="figure-0.svg" className="lg:max-w-[85%] h-full">
              {t('expertise_page.howitworks.block0')}
            </ImageBlock>
          </div>
          <div className="col-start-1 row-start-3 md:row-start-2 md:row-span-2">
            <ImageBlock image="figure-1.svg">
              {t('expertise_page.howitworks.block1')}
            </ImageBlock>
          </div>
          <div className="col-start-1 md:col-start-2 row-start-4 md:row-start-3 md:row-span-2">
            <ImageBlock image="figure-2.svg">
              {t('expertise_page.howitworks.block2')}
            </ImageBlock>
          </div>
          <div className="col-start-1 row-start-5 md:row-start-4 py-6 text-end">
            <Button
              theme="dark"
              arrow
              className="whitespace-nowrap lg:!inline-flex"
              disabled={isSubmitting}
              loading={isSubmitting}
              onClick={joinDao}
            >
              {t('common_btns.join_us')}
            </Button>
          </div>
        </div>
      </Container>

      <Container className="mt-20 md:mt-36 mb-56">
        <div className="md:text-center max-w-[36rem] mx-auto">
          <Heading2>{t('expertise_page.whatsnext.title')}</Heading2>
          <div className="mt-6 lg:mt-4 text-xl">
            {t('expertise_page.whatsnext.subtitle')}
          </div>
          <div className="mt-8">
            <Button
              theme="dark"
              arrow
              className="whitespace-nowrap md:mx-auto"
              disabled={isSubmitting}
              loading={isSubmitting}
              onClick={joinDao}
            >
              {t('common_btns.join_us')}
            </Button>
          </div>
        </div>
      </Container>

      <Container className="mt-20 md:mt-36">
        <TeamBlock />
      </Container>
    </>
  )
}

export default ExpertiseScreen
