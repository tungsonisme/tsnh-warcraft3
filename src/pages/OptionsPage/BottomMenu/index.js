import styles from "./index.module.scss"
import Button from "../../../components/Button"
import { EnumPage } from "../../../mobx/page/data"
import DelayContent from "../../../components/DelayContent"

const classnames = require("classnames")

const BottomMenu = ({ appearing, disappearing, changePage }) => {
  return (
    <div
      className={classnames(
        styles.wrapper,
        appearing && styles.appear,
        disappearing && styles.disappear
      )}
    >
      <div className={styles.menuBorder} />

      <DelayContent className={styles.content}>
        <Button disabled={disappearing}>OK</Button>
        <Button disabled={disappearing} onClick={() => changePage(EnumPage.Home)}>
          Cancel
        </Button>
      </DelayContent>
    </div>
  )
}

export default BottomMenu
