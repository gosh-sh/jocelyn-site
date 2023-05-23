import { useTranslation } from 'react-i18next'
import i18n from '../i18n/i18n'
import { useJoinDao } from '../hooks/hooks'
import { Button } from './Buttons'
import { Heading2 } from './Headings'
import IconBlock from './IconBlock'

const info = [
  { icon: 'zoom', content: i18n.t('offer_block.zoom') },
  { icon: 'dollar', content: i18n.t('offer_block.dollar') },
  { icon: 'code', content: i18n.t('offer_block.code') },
  { icon: 'chart', content: i18n.t('offer_block.chart') },
  { icon: 'camera', content: i18n.t('offer_block.camera') },
  { icon: 'hat', content: i18n.t('offer_block.hat') },
  { icon: 'figures', content: i18n.t('offer_block.figures') },
]

const OfferBlock = () => {
  const { t } = useTranslation()
  const { joinDao, isSubmitting } = useJoinDao()

  return (
    <div className="border border-black rounded-block py-14 md:py-16 px-4 md:px-12 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20">
        <div>
          <Heading2 className="whitespace-nowrap">{t('offer_block.title')}</Heading2>
          <div className="mt-6">
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
        {info.map(({ icon, content }, index) => (
          <IconBlock key={index} icon={icon}>
            {content}
          </IconBlock>
        ))}
      </div>
    </div>
  )
}

export default OfferBlock
