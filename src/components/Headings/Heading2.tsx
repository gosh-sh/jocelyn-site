import classNames from 'classnames'

type THeading2Props = React.HTMLAttributes<HTMLHeadingElement>

const Heading2 = (props: THeading2Props) => {
  const { children, className } = props

  return (
    <h2 className={classNames('text-4xl font-medium lg:leading-15', className)}>
      {children}
    </h2>
  )
}

export { Heading2 }
