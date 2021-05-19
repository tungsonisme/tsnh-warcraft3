import React from "react"
import styles from "./index.module.scss"

const classnames = require("classnames")

const Checkbox = ({ checked, onChange, children, ...rest }) => {
  return (
    <div className={styles.wrapper} {...rest}>
      <div
        className={classnames(
          styles.checkboxImage,
          checked ? styles.checked : styles.unchecked
        )}
      />
      <div>{children}</div>
    </div>
  )
}

export default Checkbox
