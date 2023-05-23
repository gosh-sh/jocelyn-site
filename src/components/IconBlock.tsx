import classNames from 'classnames'

type TIconBlockProps = React.HTMLAttributes<HTMLDivElement> & {
  icon: string
}

const IconBlock = (props: TIconBlockProps) => {
  const { icon, children, className } = props

  return (
    <div className={classNames(className)}>
      <div className="text-6xl mb-4">
        <i className={classNames('icon', `icon-${icon}`)} />
      </div>
      <div className="text-lg">{children}</div>
    </div>
  )
}

export default IconBlock
