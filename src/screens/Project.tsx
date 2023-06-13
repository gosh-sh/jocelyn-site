import { useTranslation } from 'react-i18next'
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
  useJoinDao,
  usePageScrollTop,
  useScrollToRef,
  useSubmitProject,
} from '../hooks/hooks'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Menu from '../components/Menu'
import { useRef } from 'react'

const researcher = [
  i18n.t('project_page.researcher.block0'),
  i18n.t('project_page.researcher.block1'),
  i18n.t('project_page.researcher.block2'),
  i18n.t('project_page.researcher.block3'),
  i18n.t('project_page.researcher.block4'),
]

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    company: yup.string().required(),
    description: yup.string().required(),
  })
  .required()

const ProjectScreen = () => {
  usePageScrollTop()
  const { joinDao, isSubmitting } = useJoinDao()
  const { t } = useTranslation()
  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(schema),
  })
  const { submitProject } = useSubmitProject()
  const formRef = useRef<HTMLDivElement>(null)
  const scrollToRef = useScrollToRef()

  const onProjectFormScrollTo = () => {
    const current = formRef.current
    if (current) {
      scrollToRef(current, { top: current.offsetTop - 100 })
    }
  }

  const onProjectFormSubmit = async (data: any) => {
    try {
      await submitProject(data)
      reset()
      alert(t('common_messages.project_submitted'))
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
                  onClick={onProjectFormScrollTo}
                >
                  {t('menu.project')}
                </Button>
              }
            />
          }
        >
          <h2 className="text-2xl">{t('project_page.subheader.title')}</h2>
          <div className="mt-8 text-xl">{t('project_page.subheader.text0')}</div>
          <div className="mt-6 text-xl">{t('project_page.subheader.text1')}</div>
        </Header>
      </Container>

      <Container className="mt-20 md:mt-36">
        <OfferBlock />
      </Container>

      <Container className="mt-20 md:mt-36">
        <SecondaryBlock>
          <SecondaryBlockLeft icon title={t('project_page.shield.title')} />
          <SecondaryBlockRight>{t('project_page.shield.content')}</SecondaryBlockRight>
        </SecondaryBlock>
      </Container>

      <Container className="mt-20 md:mt-36">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <Heading2>{t('project_page.researcher.title')}</Heading2>
            <div className="mt-6 lg:mt-2 text-xl">
              {t('project_page.researcher.subtitle')}
            </div>
            <div className="mt-10 mb-10 md:mt-16 md:mb-0">
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
          {researcher.map((content, index) => (
            <ImageBlock key={index} className="min-h-[22.75rem]">
              {content}
            </ImageBlock>
          ))}
        </div>
      </Container>

      <Container className="mt-20 md:mt-36" ref={formRef}>
        <SecondaryBlock className="!flex-col !items-start">
          <Heading2>{t('project_page.submit_form.title')}</Heading2>
          <div className="mt-10 w-full">
            <form onSubmit={handleSubmit(onProjectFormSubmit)}>
              <div className="flex flex-wrap items-start gap-8">
                <div className="basis-full lg:basis-0 grow">
                  <input
                    {...register('name')}
                    className="border border-gray-light rounded-[3.5rem] px-9 py-4 bg-black w-full"
                    placeholder={t('project_page.submit_form.field_name').toString()}
                    autoComplete="off"
                  />
                  <p className="text-sm mt-1 pl-6">
                    {formState.errors.name?.message?.toString()}
                  </p>
                </div>
                <div className="basis-full lg:basis-0 grow">
                  <input
                    {...register('email')}
                    className="border border-gray-light rounded-[3.5rem] px-9 py-4 bg-black w-full"
                    placeholder={t('project_page.submit_form.field_email').toString()}
                    autoComplete="off"
                  />
                  <p className="text-sm mt-1 pl-6">
                    {formState.errors.email?.message?.toString()}
                  </p>
                </div>
                <div className="basis-full lg:basis-0 grow">
                  <input
                    {...register('company')}
                    className="border border-gray-light rounded-[3.5rem] px-9 py-4 bg-black w-full"
                    placeholder={t('project_page.submit_form.field_company').toString()}
                    autoComplete="off"
                  />
                  <p className="text-sm mt-1 pl-6">
                    {formState.errors.company?.message?.toString()}
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <textarea
                  {...register('description')}
                  className="border border-gray-light rounded-3xl px-9 py-4 bg-black w-full"
                  placeholder={t('project_page.submit_form.field_description').toString()}
                  autoComplete="off"
                  rows={8}
                />
                <p className="text-sm mt-1 pl-6">
                  {formState.errors.description?.message?.toString()}
                </p>
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
        <div className="grid grid-rows-auto grid-flow-col gap-4">
          <div className="col-start-1 row-start-1 py-12">
            <Heading2 className="whitespace-nowrap">
              {t('project_page.howitworks.title')}
            </Heading2>
          </div>

          <div className="col-start-1 md:col-start-2 row-start-2 md:row-start-1 md:row-span-2">
            <ImageBlock image="figure-0.svg" className="lg:!inline-flex h-full">
              {t('project_page.howitworks.block0')}
            </ImageBlock>
          </div>
          <div className="col-start-1 row-start-3 md:row-start-2 md:row-span-2">
            <ImageBlock image="figure-1.svg">
              {t('project_page.howitworks.block1')}
            </ImageBlock>
          </div>
          <div className="col-start-1 md:col-start-2 row-start-4 md:row-start-3">
            <ImageBlock className="lg:!inline-flex h-full">
              {t('project_page.howitworks.block2')}
            </ImageBlock>
          </div>
          <div className="col-start-1 row-start-5 md:row-start-4 md:row-span-2 md:text-end">
            <ImageBlock className="lg:!inline-flex h-full lg:max-w-[75%]">
              {t('project_page.howitworks.block3')}
            </ImageBlock>
          </div>
          <div className="col-start-1 md:col-start-2 row-start-6 md:row-start-4">
            <ImageBlock image="figure-2.svg">
              {t('project_page.howitworks.block4')}
            </ImageBlock>
          </div>
          <div className="col-start-1 md:col-start-2 row-start-7 md:row-start-5 py-6">
            <Button
              theme="dark"
              arrow
              className="whitespace-nowrap !flex-nowrap"
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

export default ProjectScreen
