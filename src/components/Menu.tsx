import { useEffect, useRef, useState } from 'react'
import { Button, ButtonLink, ButtonLinkRound, ButtonRound } from './Buttons'
import classNames from 'classnames'
import i18n from '../i18n/i18n'
import { useTranslation } from 'react-i18next'
import { routes, social } from '../routes'
import Logo from './Logo'
import { Heading2 } from './Headings'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useCreateSponsor } from '../hooks/hooks'

const links = [
  { href: routes.project, title: i18n.t('menu.project') },
  { href: routes.expertise, title: i18n.t('menu.expertise') },
  { href: routes.sponsor, title: i18n.t('menu.sponsor') },
  { href: routes.team, title: i18n.t('menu.team') },
]

// const LanguageButtons = () => {
//   const { i18n } = useTranslation()

//   const onChangeLanguage = async (lng: string) => {
//     await i18n.changeLanguage(lng)
//   }

//   return (
//     <>
//       <ButtonRound
//         theme="light"
//         className="text-lg h-[3.375rem] w-[3.375rem] uppercase mr-2"
//         active={i18n.language.toLowerCase() === 'en'}
//         onClick={() => onChangeLanguage('en')}
//       >
//         En
//       </ButtonRound>
//       <ButtonRound
//         theme="light"
//         className="text-lg h-[3.375rem] w-[3.375rem] uppercase"
//         active={i18n.language.toLowerCase() === 'he'}
//         onClick={() => onChangeLanguage('he')}
//       >
//         He
//       </ButtonRound>
//     </>
//   )
// }

const _social = social.filter(({ icon }) => icon !== 'patreon')

const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required()

type TMenuProps = {
  btnAfter?: JSX.Element
}

const Menu = (props: TMenuProps) => {
  const { btnAfter } = props
  const ref = useRef<HTMLDivElement | null>(null)
  const [sticky, setSticky] = useState<boolean>(false)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const [isSupportOpen, setSupportOpen] = useState<boolean>(false)
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) })
  const { createSponsor } = useCreateSponsor()

  const onFormSubmit = async (data: any) => {
    try {
      await createSponsor({ email: data.email })
      reset()
      alert(t('common_messages.subscribed'))
    } catch (e: any) {
      console.error(e.message)
      alert(e.message)
    }
  }

  const onWindowScroll = () => {
    if (window.scrollY >= 647) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  const onMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  const onSupportToggle = () => {
    setSupportOpen(!isSupportOpen)
  }

  useEffect(() => {
    window.addEventListener('scroll', onWindowScroll)

    return () => {
      window.removeEventListener('scroll', onWindowScroll)
    }
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen || isSupportOpen) {
      document.getElementsByTagName('body').item(0)?.classList.add('overflow-hidden')
    } else {
      document.getElementsByTagName('body').item(0)?.classList.remove('overflow-hidden')
    }
  }, [isMobileMenuOpen, isSupportOpen])

  return (
    <div
      ref={(el) => (ref.current = el)}
      className={classNames(
        'flex items-center justify-between gap-x-4 transition-all z-10',
        sticky ? 'fixed top-6 left-0 container w-full' : 'relative',
      )}
    >
      <div
        className={classNames(
          'hidden xl:flex',
          'items-center border border-black rounded-3xl overflow-hidden bg-gray-light',
          sticky ? 'ml-4' : null,
        )}
      >
        {links.map(({ href, title }, index) => (
          <ButtonLink
            key={index}
            theme="light"
            href={href}
            className={classNames(
              '!border-transparent',
              index === 0 ? '-ml-1' : null,
              index === links.length - 1 ? '-mr-1' : null,
            )}
          >
            {title}
          </ButtonLink>
        ))}
      </div>

      <div
        className={classNames(
          'grow xl:grow-0 flex items-center justify-end gap-x-6 xl:gap-x-12',
          sticky ? 'px-4' : 'xl:pr-4',
        )}
      >
        <div className="grow lg:grow-0">
          {btnAfter || (
            <Button theme="light" className="w-full lg:w-auto" onClick={onSupportToggle}>
              {t('menu.support_us')}
            </Button>
          )}
        </div>

        {/* <div className="hidden xl:block">
          <LanguageButtons />
        </div> */}

        {/* Mobile menu toggle */}
        <div className="block xl:hidden">
          <ButtonRound
            theme="light"
            className="h-[3.375rem] w-[3.375rem] text-sm"
            onClick={onMobileMenuToggle}
          >
            <div className="flex items-center justify-center w-full h-full">
              <i className={classNames('icon icon-burger')} />
            </div>
          </ButtonRound>
          {/* /Mobile menu toggle */}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={classNames(
          'fixed inset-0 w-screen h-screen bg-black px-8 py-10',
          'transition-translate duration-200',
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full',
        )}
      >
        <div className="flex flex-col h-full">
          <div className="grow">
            <Logo theme="light" />
          </div>
          <div>
            {links.map(({ href, title }, index) => (
              <ButtonLink
                key={index}
                theme="dark"
                href={href}
                className={classNames('!border-transparent !px-0 !py-4 hover:!px-4')}
                onClick={onMobileMenuToggle}
              >
                {title}
              </ButtonLink>
            ))}
          </div>
          <div className="mt-20">
            <div className="flex flex-nowrap">
              <div className="grow">{/* <LanguageButtons /> */}</div>
              <div>
                <ButtonRound
                  theme="light"
                  className="h-[3.375rem] w-[3.375rem] text-lg"
                  onClick={onMobileMenuToggle}
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <i className={classNames('icon icon-arrow-end')} />
                  </div>
                </ButtonRound>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Mobile menu */}

      {/* Support us modal */}
      <div
        className={classNames(
          'fixed top-0 right-0 w-screen lg:w-6/12 xl:w-5/12 h-screen bg-black overflow-auto',
          'flex flex-col gap-y-4',
          'transition-translate duration-200 lg:rounded-l-3xl',
          isSupportOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="grow p-8 md:p-16 lg:py-8 xl:p-16">
          <div className="relative">
            <div
              className={classNames(
                'md:absolute lg:static xl:absolute',
                'right-0 top-0',
                'text-end mb-6',
              )}
            >
              <ButtonRound
                theme="dark"
                className="h-[3.375rem] w-[3.375rem] text-lg"
                onClick={onSupportToggle}
              >
                <div className="flex items-center justify-center w-full h-full">
                  <i className={classNames('icon icon-arrow-end rotate-90')} />
                </div>
              </ButtonRound>
            </div>
            <Heading2 className="text-gray-light">{t('support_block.title')}</Heading2>
          </div>

          <div className="mt-10 md:mt-20 lg:mt-10 xl:mt-20 text-lg text-gray-light">
            {t('support_block.content')}
          </div>

          <div className="mt-8">
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <div className="flex flex-wrap gap-4">
                <div className="grow">
                  <input
                    {...register('email')}
                    type="email"
                    className="border border-gray-light rounded-[3.5rem] px-9 py-4 bg-black text-gray-light w-full"
                    placeholder={t('support_block.form.field_email').toString()}
                    autoComplete="off"
                  />
                  <p className="text-sm text-gray-light mt-1 pl-6">
                    {errors.email?.message?.toString()}
                  </p>
                </div>
                <div className="grow basis-0">
                  <Button
                    type="submit"
                    theme="dark"
                    className={classNames(
                      'px-6 py-4 !text-[#616264]',
                      'hover:!text-gray-light hover:!bg-transparent',
                      'whitespace-nowrap',
                    )}
                    disabled={isSubmitting}
                    loading={isSubmitting}
                  >
                    {t('support_block.form.btn_submit')}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="p-8 md:p-16 lg:py-8 xl:p-16 bg-gray-dark rounded-t-3xl">
          <div className="flex items-center justify-around gap-4">
            {_social.map(({ icon, href }, index) => (
              <div key={index} className="h-10 md:h-16 w-10 md:w-16 overflow-hidden">
                <ButtonLinkRound
                  theme="dark"
                  href={href}
                  external
                  target="_blank"
                  rel="noreferrer"
                  className="w-full h-full !bg-gray-dark hover:!bg-gray-light"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <i
                      className={classNames('text-xl md:text-3xl icon', `icon-${icon}`)}
                    />
                  </div>
                </ButtonLinkRound>
              </div>
            ))}
          </div>
          <div className="mt-6 md:mt-10">
            <ButtonLink
              href={social.find(({ icon }) => icon === 'patreon')?.href ?? ''}
              theme="light"
              external
              target="_blank"
              rel="noreferrer"
              className="w-full hover:!bg-gray-dark hover:!border-gray-dark"
            >
              <div className="flex items-center justify-center gap-x-4 w-full h-full">
                <i className={classNames('text-xl md:text-3xl icon icon-patreon')} />
                {t('support_block.patreon')}
              </div>
            </ButtonLink>
          </div>
        </div>
      </div>
      {/* /Support us modal */}
    </div>
  )
}

export default Menu
