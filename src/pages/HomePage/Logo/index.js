import styles from "./index.module.scss"

const classnames = require("classnames")

const Logo = ({ disappearing }) => (
  <div className={classnames(styles.logo, disappearing && styles.disappearing)} />
)

export default Logo
