import styles from "./index.module.scss"
import { useCallback } from "react"
import { usePageStore } from "../../mobx/page/context"
import { EnumPage } from "../../mobx/page/data"
import { usePressAnyKey } from "../../hooks/usePressAnyKey"
import { useClickAnyWhere } from "../../hooks/useClickAnyWhere"
import { observer } from "mobx-react-lite"

const SummaryPage = () => {
  const { actions } = usePageStore()
  const { changePage } = actions || {}

  const backToHome = useCallback(() => {
    changePage(EnumPage.Home)
  }, [changePage])

  usePressAnyKey(backToHome)
  useClickAnyWhere(backToHome)

  return (
    <>
      <div className={styles.avatar}>
        <div className={styles.avatarBorder} />
        <div className={styles.avatarImage} />
      </div>

      <div className={styles.info}>
        <div className={styles.title}>Sr. Web Frontend</div>
        <div className={styles.name}>TungSon, Nguyen</div>
      </div>

      <div className={styles.description}>
        <div>React, Redux, Mobx</div>
        <div>English (verbal/oral)</div>
        <div>Full of responsibilities</div>
        <div>Burning the midnight oil</div>
        <div>Sense of humor</div>
      </div>

      <div className={styles.continueBtn} />
    </>
  )
}

export default observer(SummaryPage)
