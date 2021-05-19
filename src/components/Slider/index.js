import React, { useEffect, useRef, useState } from "react"
import styles from "./index.module.scss"

const Slider = ({ value, onChange, range, step, lowText, highText, ...rest }) => {
  const barRef = useRef()
  const circleRef = useRef()
  const [circleLeftPos, setCircleLeftPos] = useState(0)

  useEffect(() => {
    const onMouseMove = (e) => {
      const { x } = barRef.current.getBoundingClientRect()

      let value = (e.clientX - x) / barRef.current.offsetWidth
      if (value < 0) value = 0
      if (value > 1) value = 1

      // change position
      if (onChange) {
        onChange(value)
      }
      requestAnimationFrame(() => {
        setCircleLeftPos(Math.min(value * 100, 95))
      })
    }

    const onCircleMouseDown = (e) => {
      if (e.target === circleRef.current) {
        document.addEventListener("mousemove", onMouseMove)
      }
    }

    const onCircleMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove)
    }

    document.addEventListener("mousedown", onCircleMouseDown)
    document.addEventListener("mouseup", onCircleMouseUp)

    return () => {
      document.removeEventListener("mousedown", onCircleMouseDown)
      document.removeEventListener("mouseup", onCircleMouseUp)
    }
  }, [])

  return (
    <div className={styles.wrapper} {...rest}>
      <div className={styles.lowText}>{lowText}</div>

      <div className={styles.barWrapper}>
        <div ref={barRef} className={styles.bar} />
        <div
          ref={circleRef}
          className={styles.circle}
          style={{ left: `${circleLeftPos}%` }}
        />
      </div>

      <div className={styles.highText}>{highText}</div>
    </div>
  )
}

export default Slider
