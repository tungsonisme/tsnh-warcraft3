import { useEffect, useState } from "react"
import styles from "./app.module.scss"
import Background from "./components/Background"
import HomePage from "./pages/HomePage"
import { observer } from "mobx-react-lite"
import { usePageStore } from "./mobx/page/context"
import { EnumPage } from "./mobx/page/data"
import withAnimationDelay from "./hocs/withAnimationDelay"
import OptionsPage from "./pages/OptionsPage"
import SummaryPage from "./pages/SummaryPage"

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
]

pages.forEach((page) => {
  page.PageComponent = withAnimationDelay(page.PageComponent)
})

function App() {
  const [isBackgroundReady, setIsBackgroundReady] = useState(false)
  const { store: pageStore } = usePageStore()
  const { page: showPage } = pageStore || {}

  useEffect(() => {
    setTimeout(() => {
      setIsBackgroundReady(true)
    }, 500)
  }, [])

  return (
    <>
      <div className={styles.app}>
        <Background />

        {isBackgroundReady && (
          <div className={styles.content}>
            {pages.map(({ page, PageComponent }) => (
              <PageComponent isShow={page === showPage} />
            ))}
          </div>
        )}
      </div>

      {!isBackgroundReady && <div className={styles.darkScreen} />}
    </>
  )
}

export default observer(App)
