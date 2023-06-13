import { ForwardedRef, forwardRef } from 'react'
import classNames from 'classnames'

type TContainerProps = React.HTMLAttributes<HTMLDivElement>

const Container = forwardRef(
  (props: TContainerProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { className, children, ...rest } = props

    return (
      <div className={classNames('container', className)} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

export default Container
