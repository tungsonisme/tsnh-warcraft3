import styles from "./index.module.scss"
import Button from "../../../components/Button"
import { observer } from "mobx-react-lite"
import DelayContent from "../../../components/DelayContent"
import { usePageStore } from "../../../mobx/page/context"
import { EnumPage } from "../../../mobx/page/data"

const classnames = require("classnames")

const TopMenu = ({ isShow }) => {
  const { actions } = usePageStore()
  const { changePage } = actions || {}

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
        <Button disabled={!isShow} onClick={() => changePage(EnumPage.Summary)}>
          Summary
        </Button>
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
