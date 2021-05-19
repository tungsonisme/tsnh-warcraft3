import { useEffect, useState } from "react"
import styles from "./app.module.scss"
import Background from "./components/Background"
import HomePage from "./pages/HomePage"
import { usePageStore } from "./mobx/page/context"
import { EnumPage, EnumPageTransitionStatus } from "./mobx/page/data"
import OptionsPage from "./pages/OptionsPage"
import ExperiencePage from "./pages/ExperiencePage"
import SummaryPage from "./pages/SummaryPage"
import { observer } from "mobx-react-lite"
import CompanyPage from "./pages/CompanyPage"

const pages = [
  {
    page: EnumPage.Home,
    PageComponent: HomePage,
  },
  {
    page: EnumPage.Options,
    PageComponent: OptionsPage,
  },
  {
    page: EnumPage.Summary,
    PageComponent: SummaryPage,
  },
  {
    page: EnumPage.Experience,
    PageComponent: ExperiencePage,
  },
  {
    page: EnumPage.SGH,
    PageComponent: () => <CompanyPage page={EnumPage.SGH} />,
  },
  {
    page: EnumPage.Smartdatics,
    PageComponent: () => <CompanyPage page={EnumPage.Smartdatics} />,
  },
]

function App() {
  const [isBackgroundReady, setIsBackgroundReady] = useState(false)
  const { store: pageStore, actions } = usePageStore()
  const { page: showPage, pageTransitionStatus } = pageStore || {}
  const { changePage } = actions || {}
  const isDarkScreen = pageTransitionStatus === EnumPageTransitionStatus.DARK_SCREEN

  useEffect(() => {
    setTimeout(() => {
      setIsBackgroundReady(true)
      changePage(EnumPage.Home)
    }, 500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className={styles.app}>
        <Background />

        {isBackgroundReady && (
          <div className={styles.content}>
            {pages.map(({ page, PageComponent }) =>
              page === showPage ? <PageComponent key={page} /> : null
            )}
          </div>
        )}
      </div>

      {(!isBackgroundReady || isDarkScreen) && <div className={styles.darkScreen} />}
    </>
  )
}

export default observer(App)
