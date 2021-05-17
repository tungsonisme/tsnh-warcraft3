import styles from "./index.module.scss"
import Button from "../../../components/Button"
import { observer } from "mobx-react-lite"
import DelayContent from "../../../components/DelayContent"
import { EnumPage } from "../../../mobx/page/data"

const classnames = require("classnames")

const TopMenu = ({ appearing, disappearing, changePage }) => {
  return (
    <div
      className={classnames(
        styles.wrapper,
        appearing && styles.appear,
        disappearing && styles.disappear
      )}
    >
      <div className={styles.background} />
      <div className={styles.topChain} />
      <div className={styles.menuBorder} />

      <DelayContent className={styles.content}>
        <Button disabled={disappearing} onClick={() => changePage(EnumPage.Summary)}>
          Summary
        </Button>
        <Button
          disabled={disappearing}
          onClick={() => changePage(EnumPage.Experience)}
        >
          Experience
        </Button>
        <Button disabled={disappearing}>Education</Button>
        <Button disabled={disappearing}>Hobbies</Button>
        <Button
          disabled={disappearing}
          onClick={() => changePage(EnumPage.Options, 0)}
        >
          Options
        </Button>
      </DelayContent>
    </div>
  )
}

export default observer(TopMenu)
