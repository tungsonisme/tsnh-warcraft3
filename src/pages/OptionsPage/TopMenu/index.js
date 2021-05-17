import styles from "./index.module.scss"
import Button from "../../../components/Button"
import DelayContent from "../../../components/DelayContent"

const classnames = require("classnames")

const TopMenu = ({ appearing, disappearing }) => {
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

      <DelayContent className={styles.content}>
        <Button disabled={disappearing}>Gameplay</Button>
        <Button disabled={disappearing}>Video</Button>
        <Button disabled={disappearing}>Sound</Button>
      </DelayContent>
    </div>
  )
}

export default TopMenu
