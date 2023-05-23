import { Heading2 } from '../Headings'

type TSecondaryBlockLeftProps = {
  title: React.ReactNode
  subtitle?: React.ReactNode
  icon?: boolean
}

const SecondaryBlockLeft = (props: TSecondaryBlockLeftProps) => {
  const { title, subtitle, icon } = props

  return (
    <div className="grow basis-full lg:basis-1/2 flex flex-wrap md:flex-nowrap items-center gap-12">
      {icon && (
        <div className="lg:max-w-[10.75rem]">
          <img src="/images/shield.svg" alt="icon" className="w-full" />
        </div>
      )}
      <div className="grow">
        <Heading2>{title}</Heading2>
        {subtitle && <div className="mt-4">{subtitle}</div>}
      </div>
    </div>
  )
}

export { SecondaryBlockLeft }
