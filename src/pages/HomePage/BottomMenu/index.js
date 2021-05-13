import styles from "./index.module.scss"
import Button from "../../../components/Button"
import DelayContent from "../../../components/DelayContent"

const classnames = require("classnames")

const BottomMenu = ({ isShow }) => (
  <div
    className={classnames(styles.wrapper, isShow ? styles.appear : styles.disappear)}
  >
    <div className={styles.menuBorder} />

    <DelayContent className={styles.content}>
      <Button
        disabled={!isShow}
        onClick={() => {
          window.location.reload()
        }}
      >
        Quit
      </Button>
    </DelayContent>
  </div>
)

export default BottomMenu
