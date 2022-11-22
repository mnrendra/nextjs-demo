const itemStore = (set: any): any => ({
  items: [],
  addItem: () => set((state: any) => ({
    items: [
      {
        id: state.text,
        name: state.text
      },
      ...state.items,
    ]
  })),
  removeItem: (itemId: string) => set((state: any) => ({
    items: state.items.filter((item: any) => item.id !== itemId)
  }))
})

export default itemStore
