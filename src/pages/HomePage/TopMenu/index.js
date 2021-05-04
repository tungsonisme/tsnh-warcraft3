import styles from "./index.module.scss"
import Button from "../../../components/Button"
import { observer } from "mobx-react-lite"
import { useMobxStore } from "../../../mobx"
import { EnumPage } from "../../../mobx/page"
import DelayContent from "../../../components/DelayContent"

const classnames = require("classnames")

const TopMenu = ({ isShow }) => {
  const { pageStore } = useMobxStore()
  const { changePage } = pageStore || {}

  return (
    <div
      className={classnames(
        styles.wrapper,
        isShow ? styles.appear : styles.disappear
      )}
    >
      <div className={styles.background} />
      <div className={styles.topChain} />
      <div className={styles.menuBorder} />

      <DelayContent className={styles.content}>
        <Button disabled={!isShow}>Summary</Button>
        <Button disabled={!isShow}>Experience</Button>
        <Button disabled={!isShow}>Education</Button>
        <Button disabled={!isShow}>Hobbies</Button>
        <Button disabled={!isShow} onClick={() => changePage(EnumPage.Options)}>
          Options
        </Button>
      </DelayContent>
    </div>
  )
}

export default observer(TopMenu)
