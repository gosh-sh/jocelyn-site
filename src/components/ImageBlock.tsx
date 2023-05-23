import classNames from 'classnames'

type TImageBlockProps = React.HTMLAttributes<HTMLDivElement> & {
  image?: string
}

const ImageBlock = (props: TImageBlockProps) => {
  const { children, className, image } = props
  return (
    <div
      className={classNames(
        'flex flex-col border border-black rounded-block p-8',
        className,
      )}
    >
      {image && (
        <div className="mb-11 w-16 overflow-hidden self-end">
          <img src={`/images/${image}`} alt="icon" className="w-full" />
        </div>
      )}
      <div className="mt-auto text-lg self-start">{children}</div>
    </div>
  )
}

export default ImageBlock
