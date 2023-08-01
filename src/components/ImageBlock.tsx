import classNames from 'classnames'

type TImageBlockProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: string
  image?: string
}

const ImageBlock = (props: TImageBlockProps) => {
  const { children, className, title, image } = props
  return (
    <div
      className={classNames(
        'flex flex-col border border-black rounded-block p-8',
        className,
      )}
    >
      <div className="mb-12 flex flex-wrap items-start justify-between gap-y-10">
        <div className="basis-full lg:basis-7/12 order-2 lg:order-1">
          <h3 className="text-[1.75rem] leading-10">{title}</h3>
        </div>
        {image && (
          <div className="w-16 overflow-hidden ml-auto order-1 lg:order-2">
            <img src={`/images/${image}`} alt="icon" className="w-full" />
          </div>
        )}
      </div>

      <div className="mt-auto text-lg self-start">{children}</div>
    </div>
  )
}

export default ImageBlock
