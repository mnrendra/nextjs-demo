import { memo, useRef, useEffect } from 'react'
import { tw } from '@utils'

const Input = ({
  value = '',
  placeholder='',
  className = '',
  // callback
  onFocus = () => {},
  onBlur = () => {},
  onChange = () => {},
  onTyping = () => {},
  onTyped = () => {}
}: any) => {
  const ref: any = useRef(null)

  useEffect(() => {
    ref.current.value = value
  }, [value])

  const handleChange = (e: any) => {
    const { value } = e.target
    ref.current.value = value
    onChange(value, e)
    onTyping(value, e)
  }

  const handleBlur = (e: any) => {
    onBlur(ref.current.value, e)
    onTyped(ref.current.value, e)
  }

  console.log('Input', value)
  return (
    <input
      ref={ref}
      placeholder={placeholder}
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={handleBlur}
      className={tw(
        'px-4',
        'py-2',
        'm-2',
        'font-medium',
        'text-sm',
        'text-slate-50',
        'placeholder-slate-600',
        'bg-slate-900',
        'rounded-md',
        'shadow-sm',
        'border',
        'border-rose-500',
        'focus:ring-1',
        'focus:ring-rose-500',
        'focus:border-rose-500',
        'focus:outline-none',
        className,
      )}
    />
  )
}

export default memo(Input)
