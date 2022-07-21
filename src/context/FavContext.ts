import React from 'react'

export const FavContext = React.createContext({
  favs: [] as Array<string>,
  handleToggleFavs: (val: string) => [''],
})
