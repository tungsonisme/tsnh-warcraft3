import { createContext, useCallback, useContext } from "react"
import pageStore, { EnumPage, EnumPageTransitionStatus } from "./data"
import { useAudioContext } from "../../contexts/AudioContext"
import { animationSmallTime, darkScreenTime } from "../../consts/animation"
import { wait } from "../../utils/async"

const PageStoreContext = createContext({})
const usePageStore = () => useContext(PageStoreContext)

const PageStoreProvider = ({ children }) => {
  const { playMenuUpAndDownAudio, playMenuDownAudio } = useAudioContext()

  const changePage = useCallback(
    async (nextPage) => {
      const {
        page: currentPage,
        _changePage: updatePage,
        _changeBackgroundPage: updateBackground,
        _changePageTransitionStatus: updateTransition,
      } = pageStore || {}

      if (!currentPage) {
        updateBackground(nextPage)

        await wait(animationSmallTime)

        playMenuDownAudio()
        updatePage(nextPage)
        updateTransition(EnumPageTransitionStatus.APPEARING)

        await wait(animationSmallTime)

        updateTransition(EnumPageTransitionStatus.NONE)
      }

      if (currentPage === EnumPage.Home) {
        if (nextPage === EnumPage.Summary) {
          updateTransition(EnumPageTransitionStatus.DISAPPEARING)
          playMenuDownAudio()

          await wait(animationSmallTime + 100)

          updateTransition(EnumPageTransitionStatus.DARK_SCREEN)

          await wait(darkScreenTime)

          updateTransition(EnumPageTransitionStatus.NONE)
          updateBackground(nextPage)
          updatePage(nextPage)
        }

        if (nextPage === EnumPage.Experience) {
          updateTransition(EnumPageTransitionStatus.DISAPPEARING)
          playMenuDownAudio()

          await wait(animationSmallTime)

          updateTransition(EnumPageTransitionStatus.BACKGROUND_DISAPPEARING)
          updatePage(nextPage)

          await wait(animationSmallTime)

          updateTransition(EnumPageTransitionStatus.DARK_SCREEN)

          await wait(darkScreenTime)

          updateBackground(nextPage)
          updateTransition(EnumPageTransitionStatus.BACKGROUND_APPEARING)

          await wait(animationSmallTime)

          updateTransition(EnumPageTransitionStatus.NONE)
        }

        if (nextPage === EnumPage.Options) {
          updateTransition(EnumPageTransitionStatus.DISAPPEARING)
          playMenuUpAndDownAudio()

          await wait(animationSmallTime)

          updateTransition(EnumPageTransitionStatus.APPEARING)
          updatePage(nextPage)
        }
      }

      if (currentPage === EnumPage.Summary) {
        if (nextPage === EnumPage.Home) {
          updateBackground(nextPage)
          playMenuDownAudio()
          updatePage(nextPage)

          updateTransition(EnumPageTransitionStatus.DARK_SCREEN)

          await wait(darkScreenTime)

          updateTransition(EnumPageTransitionStatus.APPEARING)

          await wait(animationSmallTime)

          updateTransition(EnumPageTransitionStatus.NONE)
        }
      }

      if (currentPage === EnumPage.Experience) {
        if (nextPage === EnumPage.Home) {
          updateTransition(EnumPageTransitionStatus.BACKGROUND_DISAPPEARING)

          await wait(animationSmallTime)

          updateTransition(EnumPageTransitionStatus.DARK_SCREEN)

          await wait(darkScreenTime)

          updatePage(nextPage)
          updateTransition(EnumPageTransitionStatus.APPEARING)
          updateBackground(nextPage)
          playMenuDownAudio()

          await wait(animationSmallTime)

          updateTransition(EnumPageTransitionStatus.NONE)
        }
      }

      if (currentPage === EnumPage.Options) {
        if (nextPage === EnumPage.Home) {
          updateTransition(EnumPageTransitionStatus.DISAPPEARING)
          playMenuUpAndDownAudio()

          await wait(animationSmallTime)

          updateTransition(EnumPageTransitionStatus.APPEARING)
          updatePage(nextPage)
        }
      }
    },
    [playMenuDownAudio, playMenuUpAndDownAudio]
  )

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
