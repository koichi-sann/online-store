import Header from './components/Header'
import Footer from './components/Footer'
import styles from './app.module.css'
import { FavContext } from './context/FavContext'
import Store from './utils/store'
import { useState } from 'react'

interface IModal {
  title?: string
  content?: string
}

function App() {
  const store = new Store()
  const storedFavs: Array<string> = store.get('favorites') || []
  const [favs, setFavs] = useState(storedFavs)
  const [modalData, setModalData] = useState<IModal>({})
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <div className={styles.app}>
      <FavContext.Provider val={'asd'}>
        <Header />
        <main>
          <div className={styles.wrapper}></div>
        </main>
        <Footer />
      </FavContext.Provider>
      {/* {modalOpen && ( */}
      {/*   <Modal */}
      {/*     open={modalOpen} */}
      {/*     title={modalData.title} */}
      {/*     content={modalData.content} */}
      {/*     onClose={handleModalClose} */}
      {/*   /> */}
      {/* )} */}
    </div>
  )
}

export default App
