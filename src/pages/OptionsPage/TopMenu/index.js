import styles from "./index.module.scss"
import Button from "../../../components/Button"
import DelayContent from "../../../components/DelayContent"
import { SettingOption } from "../index"

const classnames = require("classnames")

const TopMenu = ({ appearing, disappearing, setOption }) => {
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
        <Button
          disabled={disappearing}
          onClick={() => {
            setOption(SettingOption.Video)
          }}
        >
          Video
        </Button>
        <Button
          disabled={disappearing}
          onClick={() => {
            setOption(SettingOption.Sound)
          }}
        >
          Sound
        </Button>
      </DelayContent>
    </div>
  )
}

export default TopMenu
