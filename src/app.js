import { useEffect, useState } from "react"
import styles from "./app.module.scss"
import Background from "./components/Background"
import HomePage from "./pages/HomePage"
import withAssetsFetched from "./hocs/withAssetsFetched"
import { observer } from "mobx-react-lite"
import { useMobxStore } from "./mobx"
import { EnumPage } from "./mobx/page"
import withAnimationDelay from "./hocs/withAnimationDelay"
import OptionsPage from "./pages/OptionsPage"

const pages = [
  {
    page: EnumPage.Home,
    PageComponent: HomePage,
  },
  {
    page: EnumPage.Options,
    PageComponent: OptionsPage,
  },
]

pages.forEach((page) => {
  page.PageComponent = withAnimationDelay(page.PageComponent)
})

function App() {
  const [isBackgroundReady, setIsBackgroundReady] = useState(false)
  const { pageStore } = useMobxStore()
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

export default withAssetsFetched(observer(App))
