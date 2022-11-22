const textStore = (set: any): any => ({
  text: '',
  setText: (newText: string) => set(() => ({ text: newText }))
})

export default textStore
