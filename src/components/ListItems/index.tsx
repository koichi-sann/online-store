import { FC } from 'react'
import { FavContext } from '../../context/FavContext'
import { IListItem } from '../../types/types'
import ListItem from '../ListItem'
import styles from './listitems.module.css'

export interface ListItemsProps {
  items: Array<IListItem>
}

const ListItems: FC<ListItemsProps> = (props: ListItemsProps) => {
  const { items } = props
  if (items.length > 0) {
    return (
      <FavContext.Consumer>
        {({ favs, handleToggleFavs }) => (
          <div className={styles.listitems}>
            {items.map((i) => (
              <ListItem
                item={i}
                onClick={() => handleToggleFavs(i.num)}
                key={i.num}
                isFavorite={favs.includes(i.num)}
              />
            ))}
          </div>
        )}
      </FavContext.Consumer>
    )
  } else {
    return (
      <div className={styles['no-fav']}>
        <h1>Совпадений не обнаружено.</h1>
      </div>
    )
  }
}

export default ListItems
