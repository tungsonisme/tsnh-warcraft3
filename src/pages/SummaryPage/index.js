import styles from "./index.module.scss"
import { useCallback, useEffect, useState } from "react"
import { animationSmallTime } from "../../consts/animation"
import { usePageStore } from "../../mobx/page/context"
import { EnumPage } from "../../mobx/page/data"
import { usePressAnyKey } from "../../hooks/usePressAnyKey"
import { useClickAnyWhere } from "../../hooks/useClickAnyWhere"
import DelayContent from "../../components/DelayContent"

const SummaryPage = ({ isShow }) => {
  const { actions } = usePageStore()
  const { changePage } = actions || {}

  const backToHome = useCallback(() => {
    changePage(EnumPage.Home, false)
  }, [changePage])

  usePressAnyKey(backToHome)
  useClickAnyWhere(backToHome)

  return isShow ? (
    <DelayContent className={styles.wrapper}>
      <div className={styles.avatar}>
        <div className={styles.avatarBorder} />
        <div className={styles.avatarImage} />
      </div>

      <div className={styles.info}>
        <div className={styles.title}>Frontend Developer</div>
        <div className={styles.name}>TungSon, Nguyen</div>
      </div>

      <div className={styles.description}>
        <div>Coding lover</div>
        <div>Full of responsibilities</div>
        <div>Burning the midnight oil</div>
        <div>Sense of humor</div>
      </div>

      <div className={styles.continueBtn} />
    </DelayContent>
  ) : null
}

export default SummaryPage
