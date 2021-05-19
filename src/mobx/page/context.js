import { createContext, useCallback, useContext } from "react"
import pageStore, {
  EnumBackgroundTransitionStatus,
  EnumPage,
  EnumPageTransitionStatus,
} from "./data"
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
        _changePageTransitionStatus: updatePageTransition,
        _changeBackgroundTransitionStatus: updateBackgroundTransition,
      } = pageStore || {}

      const showDarkScreen = async (time) => {
        updatePage(undefined)
        updatePageTransition(EnumPageTransitionStatus.DARK_SCREEN)
        await wait(time || darkScreenTime)
      }

      const showHomePage = async () => {
        // Menu goes down
        updatePage(nextPage)
        updatePageTransition(EnumPageTransitionStatus.APPEARING)
        playMenuDownAudio()
        await wait(animationSmallTime)

        // Reset status
        updatePageTransition(EnumPageTransitionStatus.NONE)
      }

      if (!currentPage) {
        // Background appears and wait after
        updateBackground(nextPage)
        await wait(animationSmallTime)

        // Menu goes down
        playMenuDownAudio()
        updatePage(nextPage)
        updatePageTransition(EnumPageTransitionStatus.APPEARING)
        await wait(animationSmallTime)

        // Reset status
        updatePageTransition(EnumPageTransitionStatus.NONE)
      }

      if (currentPage === EnumPage.Home) {
        if (nextPage === EnumPage.Summary) {
          // Menu goes up
          updatePageTransition(EnumPageTransitionStatus.DISAPPEARING)
          playMenuDownAudio()
          await wait(animationSmallTime)

          // Dark screen appears
          await showDarkScreen()

          // Background and page appear at the same time
          updatePageTransition(EnumPageTransitionStatus.NONE)
          updateBackground(nextPage)
          updatePage(nextPage)
        }

        if (nextPage === EnumPage.Experience) {
          // Menu goes up
          updatePageTransition(EnumPageTransitionStatus.DISAPPEARING)
          playMenuDownAudio()
          await wait(animationSmallTime)

          // Background disappears
          updateBackgroundTransition(EnumBackgroundTransitionStatus.DISAPPEARING)
          await wait(animationSmallTime)

          // Background and page appear at the same time
          updatePage(nextPage)
          updatePageTransition(EnumPageTransitionStatus.APPEARING)
          updateBackground(nextPage)
          updateBackgroundTransition(EnumBackgroundTransitionStatus.APPEARING)
          await wait(animationSmallTime)

          // Reset status
          updatePageTransition(EnumPageTransitionStatus.NONE)
        }

        if (nextPage === EnumPage.Options) {
          // Menu goes up
          updatePageTransition(EnumPageTransitionStatus.DISAPPEARING)
          playMenuUpAndDownAudio()
          await wait(animationSmallTime)

          // Menu goes down
          updatePageTransition(EnumPageTransitionStatus.APPEARING)
          updatePage(nextPage)
        }
      }

      if (currentPage === EnumPage.Summary) {
        if (nextPage === EnumPage.Home) {
          // Dark screen appears
          await showDarkScreen()

          // Change background and page disappears
          updatePageTransition(EnumPageTransitionStatus.DISAPPEARING)
          updateBackground(nextPage)
          await wait(animationSmallTime / 2)

          // Back to home page
          await showHomePage()
        }
      }

      if (currentPage === EnumPage.Experience) {
        if (nextPage === EnumPage.Home) {
          // Page and background disappears
          updatePageTransition(EnumPageTransitionStatus.DISAPPEARING)
          updateBackgroundTransition(EnumBackgroundTransitionStatus.DISAPPEARING)
          await wait(animationSmallTime)

          // Change background and page disappears
          updatePage(undefined)
          updatePageTransition(EnumPageTransitionStatus.NONE)
          updateBackground(nextPage)
          updateBackgroundTransition(EnumBackgroundTransitionStatus.APPEARING)
          await wait(animationSmallTime)

          // Back to home page
          await showHomePage()
        }

        if ([EnumPage.SGH, EnumPage.Smartdatics].includes(nextPage)) {
          // Page and background disappears
          updatePageTransition(EnumPageTransitionStatus.DISAPPEARING)
          updateBackgroundTransition(EnumBackgroundTransitionStatus.DISAPPEARING)
          await wait(animationSmallTime)

          // Dark screen appears
          await showDarkScreen()

          // Page and background appears at the same time
          updatePageTransition(EnumPageTransitionStatus.NONE)
          updateBackgroundTransition(EnumBackgroundTransitionStatus.NONE)
          updatePage(nextPage)
          updateBackground(nextPage)
        }
      }

      if (currentPage === EnumPage.Options) {
        if (nextPage === EnumPage.Home) {
          // Menu goes up
          updatePageTransition(EnumPageTransitionStatus.DISAPPEARING)
          playMenuUpAndDownAudio()
          await wait(animationSmallTime)

          // Back to home page
          await showHomePage()
        }
      }

      if ([EnumPage.SGH, EnumPage.Smartdatics].includes(currentPage)) {
        if (nextPage === EnumPage.Experience) {
          // Dark screen appears
          updateBackgroundTransition(EnumBackgroundTransitionStatus.DISAPPEARING)
          await showDarkScreen(animationSmallTime / 2)

          // Background and page appear at the same time
          updatePage(nextPage)
          updatePageTransition(EnumPageTransitionStatus.NONE)
          updateBackground(nextPage)
          updateBackgroundTransition(EnumBackgroundTransitionStatus.APPEARING)
          await wait(animationSmallTime)

          // Reset status
          // updatePageTransition(EnumPageTransitionStatus.NONE)
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
