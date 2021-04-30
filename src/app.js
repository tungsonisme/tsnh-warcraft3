import styles from "./app.module.scss"
import Background from "./components/Background"
import HomePage from "./pages/HomePage"
import withAssetsFetched from "./hocs/withAssetsFetched"
import { useEffect, useState } from "react"

function App() {
  const [isBackgroundReady, setIsBackgroundReady] = useState(false)

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
            <HomePage />
          </div>
        )}
      </div>

      {!isBackgroundReady && <div className={styles.darkScreen} />}
    </>
  )
}

export default withAssetsFetched(App)
