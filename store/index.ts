import zustand from 'zustand'

import itemStore from './itemStore'
import textStore from './textStore'

export default zustand((set) => ({
  ...itemStore(set),
  ...textStore(set)
}))
