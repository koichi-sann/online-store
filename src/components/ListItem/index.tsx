import { FC, useState } from 'react'
import styles from './listitem.module.css'
import { IListItem } from '../../types/types'

interface Props {
  item: IListItem
  onClick: () => Array<string>
  isFavorite: boolean
}

const ListItem = (props: Props) => {
  const { item, onClick, isFavorite } = props

  const [isFav, setIsFav] = useState<boolean>(isFavorite)

  const handleToggleFavorite = () => {
    const fav = onClick()
    setIsFav(fav.includes(item.num))
  }

  return (
    <div onClick={handleToggleFavorite} className={styles.ListItem}>
      <h4 className={styles['ListItem__title']}>{item.name}</h4>
      <div className={styles['ListItem__img-wrapper']}>
        <img
          src={`./assets/toys/${item.num}.png`}
          alt={item.name}
          className={styles['ListItem__img']}
        />
      </div>
      <ul className={styles['ListItem__info']}>
        <li>Количество плагинов: {item.quantity}</li>
        <li>Год выхода: {item.year}</li>
        <li>Разработчик: {item.shape}</li>
        <li>Цвет: {item.color}</li>
        <li>Количество версий: {item.size}</li>
        <li>Избранный: {item.favorite ? 'да' : 'нет'}</li>
      </ul>
      {isFav && (
        <div className={styles.favorite} title='Добавлена в избранное'></div>
      )}
    </div>
  )
}

export default ListItem
