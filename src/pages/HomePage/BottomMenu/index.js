import styles from "./index.module.scss"
import Button from "../../../components/Button"
import DelayContent from "../../../components/DelayContent"

const classnames = require("classnames")

const BottomMenu = ({ appearing, disappearing }) => {
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
        <Button
          disabled={disappearing}
          onClick={() => {
            window.location.reload()
          }}
        >
          Quit
        </Button>
      </DelayContent>
    </div>
  )
}

export default BottomMenu
