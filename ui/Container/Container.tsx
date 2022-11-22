import { memo } from 'react'
import { tw } from '@utils'

const Container = ({
  children,
  className = ''
}: any) => {
  console.log('Container')
  return (
    <div
      className={tw(
        'container',
        'mx-auto',
        className
      )}
    >
      {children}
    </div>
  )
}

export default memo(Container)
