import { useTranslation } from 'react-i18next'
import { routes } from '../routes'
import { ButtonLink } from './Buttons'
import { Heading2 } from './Headings'

const TeamBlock = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-wrap items-center justify-center gap-24">
      <div className="basis-full lg:basis-1/3">
        <Heading2 className="mb-10">{t('team_block.title')}</Heading2>
        <ButtonLink theme="dark" href={routes.team} arrow className="!inline-flex">
          {t('common_btns.about_us')}
        </ButtonLink>
      </div>
      <div className="basis-full lg:basis-1/3">
        <div className="max-w-[18.125rem] mx-auto">
          <img src="/images/team.png" alt="team" className="w-full" />
        </div>
      </div>
    </div>
  )
}

export default TeamBlock
