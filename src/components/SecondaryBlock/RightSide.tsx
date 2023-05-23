import classNames from 'classnames'

type TSecondaryBlockRightProps = React.HTMLAttributes<HTMLDivElement>

const SecondaryBlockRight = (props: TSecondaryBlockRightProps) => {
  const { children, className } = props

  return <div className={classNames('grow basis-1/2 text-lg', className)}>{children}</div>
}

export { SecondaryBlockRight }
