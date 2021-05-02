import styles from "./index.module.scss"
import Button from "../../../components/Button"

const TopMenu = () => (
  <div className={styles.wrapper}>
    <div className={styles.background} />
    <div className={styles.topChain} />
    <div className={styles.menuBorder} />

    <div className={styles.content}>
      <Button>Summary</Button>
      <Button>Experience</Button>
      <Button>Education</Button>
      <Button>Hobbies</Button>
      <Button>Options</Button>
    </div>
  </div>
)

export default TopMenu
