import { createContext, useContext } from "react"
import pageStore, { EnumPage } from "./data"
import { useAudioContext } from "../../contexts/AudioContext"

const PageStoreContext = createContext({})
const usePageStore = () => useContext(PageStoreContext)

const PageStoreProvider = ({ children }) => {
  const { playMenuUpAndDownAudio, playMenuDownAudio } = useAudioContext()

  const changePage = (nextPage) => {
    const { page: currentPage, _changePage: changePageInStore } = pageStore || {}
    changePageInStore(nextPage)

    if (currentPage === EnumPage.Home) {
      if (nextPage === EnumPage.Options) {
        playMenuUpAndDownAudio()
      }

      if (nextPage === EnumPage.Summary) {
        playMenuDownAudio()
      }
    }

    if (currentPage === EnumPage.Options) {
      if (nextPage === EnumPage.Home) {
        playMenuUpAndDownAudio()
      }
    }
  }

  return (
    <PageStoreContext.Provider
      value={{
        store: pageStore,
        actions: {
          changePage,
        },
      }}
    >
      {children}
    </PageStoreContext.Provider>
  )
}

export { PageStoreContext, usePageStore, PageStoreProvider }
