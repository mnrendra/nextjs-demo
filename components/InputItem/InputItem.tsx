import { memo } from 'react'
import { Input } from '@ui'
import store from '@store'

const InputItem = () => {
  const text = store(({ text }: any) => text)
  const setText = store(({ setText }: any) => setText)

  const handleTyped = (text: string) => {
    console.log('typed-----', text)
    setText(text)
  }

  console.log('InputItem', text)

  return (
    <Input
      placeholder="New Item ..."
      value={text}
      onTyped={handleTyped}
    />
  )
}

export default memo(InputItem)
