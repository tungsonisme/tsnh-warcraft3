import styles from "./index.module.scss"
import Button from "../../../components/Button"
import { EnumPage } from "../../../mobx/page"
import { useMobxStore } from "../../../mobx"
import DelayContent from "../../../components/DelayContent"

const classnames = require("classnames")

const BottomMenu = ({ isShow }) => {
  const { pageStore } = useMobxStore()
  const { changePage } = pageStore || {}

  return (
    <div
      className={classnames(
        styles.wrapper,
        isShow ? styles.appear : styles.disappear
      )}
    >
      <div className={styles.menuBorder} />

      <DelayContent className={styles.content}>
        <Button disabled={!isShow}>OK</Button>
        <Button disabled={!isShow} onClick={() => changePage(EnumPage.Home)}>
          Cancel
        </Button>
      </DelayContent>
    </div>
  )
}

export default BottomMenu
