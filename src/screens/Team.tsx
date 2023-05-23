import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n/i18n'
import Container from '../components/Container'
import Header from '../components/Header'
import { usePageScrollTop } from '../hooks/hooks'
import { Heading2 } from '../components/Headings'
import classNames from 'classnames'
import { Button } from '../components/Buttons'

const team = [
  {
    avatar: 'team-0.png',
    role: i18n.t('team_page.team0.role'),
    name: i18n.t('team_page.team0.name'),
    description: [i18n.t('team_page.team0.text0'), i18n.t('team_page.team0.text1')],
  },
  {
    avatar: 'team-1.png',
    role: i18n.t('team_page.team1.role'),
    name: i18n.t('team_page.team1.name'),
    description: [i18n.t('team_page.team1.text0'), i18n.t('team_page.team1.text1')],
  },
  {
    avatar: 'team-2.png',
    role: i18n.t('team_page.team2.role'),
    name: i18n.t('team_page.team2.name'),
    description: [i18n.t('team_page.team2.text0')],
  },
]

const TeamScreen = () => {
  usePageScrollTop()
  const { t } = useTranslation()
  const [isDetailsOpen, setDetailsOpen] = useState<boolean[]>([false, false, false])

  const onDetailsToggle = (index: number) => {
    const isOpen = isDetailsOpen[index]
    setDetailsOpen((state) => {
      return [...state.slice(0, index), !isOpen, ...state.slice(index + 1)]
    })
  }

  return (
    <>
      <Container>
        <Header>
          <div className="text-xl">{t('team_page.subheader.text0')}</div>
          <div className="mt-6 text-xl">{t('team_page.subheader.text1')}</div>
          <div className="mt-6 text-xl">{t('team_page.subheader.text2')}</div>
        </Header>
      </Container>

      <Container className="mt-20 md:mt-36">
        <div className="flex flex-col gap-y-10">
          {team.map((item, index) => (
            <div
              key={index}
              className={classNames(
                'flex flex-wrap-reverse justify-between gap-4',
                'border border-black rounded-block p-6 lg:p-16',
              )}
            >
              <div className="grow basis-full lg:basis-0 -mt-16 lg:mt-0">
                <div className="flex flex-col-reverse lg:flex-col gap-y-3">
                  <div>
                    <span className="bg-black text-gray-light text-xs py-1 px-4 rounded-2xl">
                      {item.role}
                    </span>
                  </div>
                  <Heading2>{item.name}</Heading2>
                </div>
                <div className="mt-4 text-xl">{item.description[0]}</div>
                <div
                  className={classNames(
                    'text-lg overflow-hidden transition-all duration-300',
                    !isDetailsOpen[index]
                      ? 'max-h-0 opacity-0'
                      : 'max-h-screen opacity-100 mt-8',
                  )}
                >
                  {item.description[1] || null}
                </div>
                {item.description.length > 1 && (
                  <div className="mt-10">
                    <Button
                      theme="light"
                      arrow
                      className={classNames(
                        '!px-0 !border-0 w-full md:w-1/2 text-start',
                        'hover:bg-gray-light hover:!text-black',
                      )}
                      onClick={() => onDetailsToggle(index)}
                    >
                      {isDetailsOpen[index] ? 'Read less' : 'Read more'}
                    </Button>
                  </div>
                )}
              </div>
              <div className="basis-full lg:basis-auto -translate-y-12 lg:translate-y-0">
                <div className="max-w-[10.25rem] lg:max-w-[14.5rem] rounded-full overflow-hidden ml-auto">
                  <img src={`/images/${item.avatar}`} alt="avatar" className="w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}

export default TeamScreen
