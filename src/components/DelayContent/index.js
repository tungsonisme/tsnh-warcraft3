import React, { useEffect, useState } from "react"
import styles from "./index.module.scss"
import { animationSmallTime } from "../../consts/animation"

const DelayContent = ({ children, delayTime, ...rest }) => {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    setTimeout(
      () => {
        setIsShow(true)
      },
      delayTime === undefined ? animationSmallTime : delayTime
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div {...rest}>{isShow && <div className={styles.inner}>{children}</div>}</div>
  )
}

export default DelayContent
