import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import i18n from '../i18n/i18n'
import { Button } from '../components/Buttons'
import Container from '../components/Container'
import Header from '../components/Header'
import IconBlock from '../components/IconBlock'
import {
  SecondaryBlock,
  SecondaryBlockLeft,
  SecondaryBlockRight,
} from '../components/SecondaryBlock'
import { useCreateSponsor, useJoinDao, usePageScrollTop } from '../hooks/hooks'
import { Heading2 } from '../components/Headings'
import { Trans, useTranslation } from 'react-i18next'

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required()

const purpose = [
  { icon: 'people', content: i18n.t('sponsor_page.purpose.text0') },
  { icon: 'check', content: i18n.t('sponsor_page.purpose.text1') },
  { icon: 'chart', content: i18n.t('sponsor_page.purpose.text2') },
]

const SponsorScreen = () => {
  usePageScrollTop()
  const { joinDao, isSubmitting } = useJoinDao()
  const { t } = useTranslation()
  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(schema),
  })
  const { createSponsor } = useCreateSponsor()

  const onFormSubmit = async (data: any) => {
    try {
      await createSponsor({ name: data.name, email: data.email })
      reset()
      alert(t('common_messages.subscribed'))
    } catch (e: any) {
      console.error(e.message)
      alert(e.message)
    }
  }

  return (
    <>
      <Container>
        <Header>
          <h2 className="text-2xl">{t('sponsor_page.subheader.title')}</h2>
          <div className="mt-8 text-xl">{t('sponsor_page.subheader.text0')}</div>
          <div className="mt-6 text-xl">{t('sponsor_page.subheader.text1')}</div>
          <div className="mt-6 text-xl">{t('sponsor_page.subheader.text2')}</div>
        </Header>
      </Container>

      <Container className="mt-20 md:mt-36">
        <div className="max-w-[45.625rem] mx-auto md:text-center">
          <Heading2>{t('sponsor_page.action.title')}</Heading2>
          <div className="mt-4 text-lg">{t('sponsor_page.action.content')}</div>
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
        <div className="border border-black rounded-block py-14 md:py-16 px-4 md:px-12 overflow-hidden">
          <Heading2 className="lg:text-center">
            {t('sponsor_page.purpose.title')}
          </Heading2>
          <div className="mt-16 md:mt-20 flex flex-wrap justify-around gap-12">
            {purpose.map(({ icon, content }, index) => (
              <IconBlock key={index} icon={icon} className="basis-full md:basis-1/4">
                {content}
              </IconBlock>
            ))}
          </div>
        </div>
      </Container>

      <Container className="mt-20 md:mt-36">
        <SecondaryBlock className="!gap-y-14 xl:!gap-y-4">
          <SecondaryBlockLeft
            title={
              <Trans key="sponsor_page.subscribe_form.title">
                Your contribution will have
                <br />
                an immediate impact
              </Trans>
            }
            subtitle={
              <Trans key="sponsor_page.subscribe_form.subtitle">
                Together, we can change the game for
                <br />
                scientists at risk and their ideas.
              </Trans>
            }
          />
          <SecondaryBlockRight>
            <div className="md:w-8/12">
              <form onSubmit={handleSubmit(onFormSubmit)}>
                <div>
                  <input
                    {...register('name')}
                    className="border border-gray-light rounded-[3.5rem] px-9 py-4 bg-black w-full"
                    placeholder={t('sponsor_page.subscribe_form.field_name').toString()}
                    autoComplete="off"
                  />
                  <p className="text-sm mt-1 pl-6">
                    {formState.errors.name?.message?.toString()}
                  </p>
                </div>
                <div className="mt-4">
                  <input
                    {...register('email')}
                    type="email"
                    className="border border-gray-light rounded-[3.5rem] px-9 py-4 bg-black w-full"
                    placeholder={t('sponsor_page.subscribe_form.field_email').toString()}
                    autoComplete="off"
                  />
                  <p className="text-sm mt-1 pl-6">
                    {formState.errors.email?.message?.toString()}
                  </p>
                </div>
                <div className="mt-4">
                  <Button
                    type="submit"
                    theme="dark"
                    className="px-6 py-4 !text-[#616264] hover:!text-gray-light hover:!bg-transparent"
                    disabled={formState.isSubmitting}
                    loading={formState.isSubmitting}
                  >
                    {t('sponsor_page.subscribe_form.btn_submit')}
                  </Button>
                </div>
              </form>
            </div>
          </SecondaryBlockRight>
        </SecondaryBlock>
      </Container>
    </>
  )
}

export default SponsorScreen
