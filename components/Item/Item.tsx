import { memo } from 'react'
import { XCircleIcon as CloseIcon } from '@heroicons/react/24/outline'
import { Card } from '@ui'
import { tw } from '@utils'
import store from '@store'

const Item = ({
  name = ''
}) => {
  const removeItem = store(({ removeItem }: any) => removeItem)

  const handleRemoveItem = () => {
    console.log('remove------', name)
    removeItem(name)
  }

  console.log('Item', name)
  return (
    <Card
      className={tw(
        'flex',
        'justify-between',
        'my-4'
      )}
    >
      <p
        className={tw(
          'w-fit'
        )}
      >
        {name}
      </p>
      <CloseIcon
        onClick={handleRemoveItem}
        className={tw(
          'w-6',
          'h-6',
          'text-rose-500',
          'hover:text-rose-700',
          'cursor-pointer'
        )}
      />
    </Card>
  )
}

export default memo(Item)
