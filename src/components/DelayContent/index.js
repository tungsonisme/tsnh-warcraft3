import React, { useEffect, useState } from "react"
import styles from "./index.module.scss"

const DelayContent = ({ children, ...rest }) => {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true)
    }, 700)
  }, [])

  return (
    <div {...rest}>{isShow && <div className={styles.inner}>{children}</div>}</div>
  )
}

export default DelayContent
