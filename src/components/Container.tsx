import classNames from 'classnames'

type TContainerProps = React.HTMLAttributes<HTMLDivElement>

const Container = (props: TContainerProps) => {
  const { className, children } = props

  return <div className={classNames('container', className)}>{children}</div>
}

export default Container
