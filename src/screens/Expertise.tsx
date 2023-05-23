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
import { useJoinDao, usePageScrollTop } from '../hooks/hooks'

const expert = [
  i18n.t('expertise_page.expert.block0'),
  i18n.t('expertise_page.expert.block1'),
  i18n.t('expertise_page.expert.block2'),
  i18n.t('expertise_page.expert.block3'),
]

const ExpertiseScreen = () => {
  usePageScrollTop()
  const { joinDao, isSubmitting } = useJoinDao()
  const { t } = useTranslation()

  return (
    <>
      <Container>
        <Header>
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
            <div>
              <ImageBlock key={index} className="min-h-[22.75rem]">
                {content}
              </ImageBlock>
            </div>
          ))}
        </div>
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
