import classNames from 'classnames'

type TSecondaryBlockProps = React.HTMLAttributes<HTMLDivElement>

const SecondaryBlock = (props: TSecondaryBlockProps) => {
  const { children, className } = props

  return (
    <div
      className={classNames(
        'flex flex-wrap xl:flex-nowrap items-center justify-between gap-x-28 gap-y-4',
        'bg-black rounded-block px-4 md:px-12 lg:px-16 py-12 text-gray-light',
        className,
      )}
    >
      {children}
    </div>
  )
}

export { SecondaryBlock }
