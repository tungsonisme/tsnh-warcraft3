import styles from "./index.module.scss"
import { observer } from "mobx-react-lite"
import DelayContent from "../../../components/DelayContent"

const classnames = require("classnames")

const OptionMenu = ({ isShow }) => {
  return (
    <div
      className={classnames(
        styles.wrapper,
        isShow ? styles.appear : styles.disappear
      )}
    >
      <div className={styles.background} />
      <div className={styles.menuBorder} />

      <DelayContent className={styles.content} />
    </div>
  )
}

export default observer(OptionMenu)
