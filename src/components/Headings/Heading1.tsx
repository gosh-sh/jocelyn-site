import classNames from 'classnames'

type THeading1Props = React.HTMLAttributes<HTMLHeadingElement>

const Heading1 = (props: THeading1Props) => {
  const { children, className } = props

  return (
    <h1
      className={classNames(
        'text-4xl lg:text-6xl leading-14 lg:leading-20 font-medium',
        className,
      )}
    >
      {children}
    </h1>
  )
}

export { Heading1 }
