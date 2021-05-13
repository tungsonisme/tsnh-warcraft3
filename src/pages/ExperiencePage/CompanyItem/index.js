import styles from "./index.module.scss"
import ButtonTransparent from "../../../components/ButtonTransparent"

const classnames = require("classnames")

const CompanyItem = ({ className, date, name, ...rest }) => (
  <div className={classnames(styles.wrapper, className)} {...rest}>
    <div className={styles.buttonWrapper}>
      <ButtonTransparent
        wrapperStyle={{ transform: `scale(0.6)`, marginTop: "-1.5vh" }}
        opacity={0.4}
      >
        <div className={styles.triangle} />
      </ButtonTransparent>
    </div>

    <div className={styles.info}>
      <div className={styles.date}>{date}</div>
      <div className={styles.name}>{name}</div>
    </div>
  </div>
)

export default CompanyItem
