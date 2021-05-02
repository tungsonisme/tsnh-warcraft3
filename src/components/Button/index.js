import React, { useMemo } from "react"
import styles from "./index.module.scss"

const classnames = require("classnames")

const Button = ({ className, children, ...rest }) => {
  const processedChildren = useMemo(() => {
    if (typeof children === "string") {
      const firstChar = children[0]
      const remainingChars = children.substring(1, children.length)
      return (
        <>
          <span>{firstChar}</span>
          <span className={styles.remainingChars}>{remainingChars}</span>
        </>
      )
    }

    return children
  }, [children])

  return (
    <div className={styles.btnBackground}>
      <div className={styles.btnBorder} />

      <button className={classnames(styles.btn, className)} {...rest}>
        <span>{processedChildren}</span>
      </button>
    </div>
  )
}

export default Button
