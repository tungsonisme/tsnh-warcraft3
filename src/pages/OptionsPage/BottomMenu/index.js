import styles from "./index.module.scss"
import Button from "../../../components/Button"
import { EnumPage } from "../../../mobx/page/data"
import { usePageStore } from "../../../mobx/page/context"
import DelayContent from "../../../components/DelayContent"

const classnames = require("classnames")

const BottomMenu = ({ isShow }) => {
  const { actions } = usePageStore()
  const { changePage } = actions || {}

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
