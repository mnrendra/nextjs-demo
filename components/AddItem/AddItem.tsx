import { memo } from 'react'
import { Button } from '@ui'
import store from '@store'

const AddItem = () => {
  const addItem = store(({ addItem }: any) => addItem)
  const setText = store(({ setText }: any) => setText)

  const handleAddItem = () => {
    console.log('add-------')
    addItem()
    setText('')
  }

  console.log('AddItem')
  return (
    <Button
      text="Add Item"
      onClick={handleAddItem}
    />
  )
}

export default memo(AddItem)
