import React from "react"
import styles from "./index.module.scss"
import { useAudioContext } from "../../contexts/AudioContext"

const classnames = require("classnames")

const ButtonTransparent = ({
  className,
  children,
  onClick,
  wrapperStyle,
  opacity = 1,
  ...rest
}) => {
  const { playButtonClickAudio } = useAudioContext()

  return (
    <div className={styles.btnBackground} style={wrapperStyle}>
      <div className={styles.leftBorder} style={{ opacity }} />
      <div className={styles.centerBorder} style={{ opacity }} />
      <div className={styles.rightBorder} style={{ opacity }} />

      <button
        className={classnames(styles.btn, className)}
        onClick={(...rest) => {
          playButtonClickAudio()
          if (onClick) {
            onClick(...rest)
          }
        }}
        {...rest}
      >
        <span>{children}</span>
      </button>
    </div>
  )
}

export default ButtonTransparent
