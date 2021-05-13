import styles from "./index.module.scss"
import Button from "../../../components/Button"
import { observer } from "mobx-react-lite"
import DelayContent from "../../../components/DelayContent"
import { usePageStore } from "../../../mobx/page/context"
import { EnumPage } from "../../../mobx/page/data"
import { useCallback } from "react"
import { animationSmallTime } from "../../../consts/animation"

const classnames = require("classnames")

const TopMenu = ({ isShow, changingPage, setIsChangingPage }) => {
  const { actions } = usePageStore()
  const { changePage } = actions || {}

  const changePageWithTimeOut = useCallback(
    (newPage, delayTime) => {
      setIsChangingPage(true)
      setTimeout(
        () => changePage(newPage),
        delayTime === undefined ? animationSmallTime : 0
      )
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [changePage]
  )

  return (
    <div
      className={classnames(
        styles.wrapper,
        isShow && styles.appear,
        changingPage && styles.disappear
      )}
    >
      <div className={styles.background} />
      <div className={styles.topChain} />
      <div className={styles.menuBorder} />

      <DelayContent className={styles.content}>
        <Button
          disabled={!isShow}
          onClick={() => changePageWithTimeOut(EnumPage.Summary)}
        >
          Summary
        </Button>
        <Button
          disabled={!isShow}
          onClick={() => changePageWithTimeOut(EnumPage.Experience)}
        >
          Experience
        </Button>
        <Button disabled={!isShow}>Education</Button>
        <Button disabled={!isShow}>Hobbies</Button>
        <Button
          disabled={!isShow}
          onClick={() => changePageWithTimeOut(EnumPage.Options, 0)}
        >
          Options
        </Button>
      </DelayContent>
    </div>
  )
}

export default observer(TopMenu)
