import { memo } from 'react'
import { Item } from '@components'
import { tw } from '@utils'
import store from '@store'

const List = () => {
  const items = store(({ items }: any) => items)
  console.log('List')
  return (
    <div>
      {items.length
        ? items.map((item: any) => (
          <Item
            key={item.id}
            name={item.name}
          />))
        : (
          <div className={tw('text-center')}>
            <p className={tw('font-bold')}>There is no Item!</p>
            <small>Please open <b className={tw('text-rose-500')}>Dev Tools</b> - <b className={tw('text-rose-500')}>Consol</b> and see the <b className={tw('text-rose-500')}>Rendering</b> log!</small>
          </div>
        )
      }
    </div>
  )
}

export default memo(List)
