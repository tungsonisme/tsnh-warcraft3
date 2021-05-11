import React, { useEffect, useState } from "react"
import styles from "./index.module.scss"
import { animationSmallTime } from "../../consts/animation"

const DelayContent = ({ children, ...rest }) => {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true)
    }, animationSmallTime)
  }, [])

  return (
    <div {...rest}>{isShow && <div className={styles.inner}>{children}</div>}</div>
  )
}

export default DelayContent
