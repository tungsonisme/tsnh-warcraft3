import styles from "./index.module.scss"
import Button from "../../../components/Button"
import { observer } from "mobx-react-lite"
import DelayContent from "../../../components/DelayContent"

const classnames = require("classnames")

const TopMenu = ({ isShow }) => {
  return (
    <div
      className={classnames(
        styles.wrapper,
        isShow ? styles.appear : styles.disappear
      )}
    >
      <div className={styles.background} />
      <div className={styles.menuBorder} />

      <DelayContent className={styles.content}>
        <Button disabled={!isShow}>Gameplay</Button>
        <Button disabled={!isShow}>Video</Button>
        <Button disabled={!isShow}>Sound</Button>
      </DelayContent>
    </div>
  )
}

export default observer(TopMenu)
