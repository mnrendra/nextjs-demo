import { memo } from 'react'
import { tw } from '@utils'

const Card = ({
  children,
  content = null,
  className = '',
  // callback
  onClick = () => {},
}: any) => {
  console.log('Card')
  return (
    <div
      onClick={onClick}
      className={tw(
        'p-4',
        'm-2',
        'font-medium',
        'text-sm',
        'text-slate-50',
        'bg-slate-800',
        'rounded-md',
        'shadow-sm',
        'hover:shadow-md',
        'shadow-black',
        'hover:shadow-black',
        className,
      )}
    >
      {children || content}
    </div>
  )
}

export default memo(Card)
