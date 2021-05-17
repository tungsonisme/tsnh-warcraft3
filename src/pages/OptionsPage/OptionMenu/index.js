import styles from "./index.module.scss"
import DelayContent from "../../../components/DelayContent"

const classnames = require("classnames")

const OptionMenu = ({ appearing, disappearing }) => {
  return (
    <div
      className={classnames(
        styles.wrapper,
        appearing && styles.appear,
        disappearing && styles.disappear
      )}
    >
      <div className={styles.background} />
      <div className={styles.menuBorder} />

      <DelayContent className={styles.content} />
    </div>
  )
}

export default OptionMenu
