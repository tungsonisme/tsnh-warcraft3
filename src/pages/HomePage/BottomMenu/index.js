import styles from "./index.module.scss"
import Button from "../../../components/Button"

const BottomMenu = () => (
  <div className={styles.wrapper}>
    <div className={styles.menuBorder} />

    <div className={styles.content}>
      <Button>Quit</Button>
    </div>
  </div>
)

export default BottomMenu
