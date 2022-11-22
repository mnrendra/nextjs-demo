import { memo } from 'react'
import { Container } from '@ui'
import { AddItem, InputItem, List } from '@components'

const Home = () => {
  console.log('Home')
  return (
    <Container className='py-6'>
      <InputItem />
      <AddItem />
      <List/>
    </Container>
  )
}

export default memo(Home)
