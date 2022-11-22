import { memo } from 'react'
import { tw } from '@utils'

const Button = ({
  children,
  text = '',
  className = '',
  // callback
  onClick = () => {}
}: any) => {
  console.log('Button')
  return (
    <button
      onClick={onClick}
      className={tw(
        'h-9',
        'px-4',
        'py-2',
        'm-2',
        'font-medium',
        'text-sm',
        'text-rose-50',
        'bg-rose-500',
        'hover:bg-rose-700',
        'rounded-md',
        'shadow-sm',
        'hover:shadow-md',
        'shadow-black',
        'hover:shadow-black',
        'cursor-pointer',
        className,
      )}
    >
      {children || text}
    </button>
  )
}

export default memo(Button)
