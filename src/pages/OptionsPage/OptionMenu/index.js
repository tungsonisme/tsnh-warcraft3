import styles from "./index.module.scss"
import Slider from "../../../components/Slider"
import Checkbox from "../../../components/Checkbox"
import { useEffect, useRef, useState } from "react"
import DelayContent from "../../../components/DelayContent"

const classnames = require("classnames")

const OptionMenu = ({
  option,
  disappearing: pageDisappearing,
  contentAppearing,
}) => {
  const isFirst = useRef(true)
  const lastOption = useRef(option)
  const [appearing, setAppearing] = useState(false)
  const [disappearing, setDisappearing] = useState(false)

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      return
    }

    if (!lastOption.current) {
      setAppearing(true)
      setDisappearing(false)
    } else {
      setAppearing(false)
      setDisappearing(true)
    }

    lastOption.current = option
  }, [option])

  useEffect(() => {}, [contentAppearing])

  return (
    <div
      className={classnames(
        styles.wrapper,
        appearing && styles.appear,
        (disappearing || (appearing && pageDisappearing)) && styles.disappear
      )}
    >
      <div className={styles.background} />
      <div className={styles.menuBorder} />

      {contentAppearing && (
        <DelayContent className={styles.content}>
          <div className={styles.title}>Sound Options</div>

          <div className={styles.settingRow}>
            <Checkbox>
              <div className={styles.checkboxTitle}>Sound Effects Volume:</div>
            </Checkbox>
            <Slider
              lowText="Low"
              highText="High"
              range={[0, 10]}
              step={1}
              style={{ marginTop: "1.2vh", marginLeft: "0.5vh" }}
            />
          </div>

          <div className={styles.settingRow}>
            <Checkbox checked>
              <div className={styles.checkboxTitle}>Music Volume:</div>
            </Checkbox>
            <Slider
              lowText="Low"
              highText="High"
              range={[0, 10]}
              step={1}
              style={{ marginTop: "1.2vh", marginLeft: "0.5vh" }}
            />
          </div>
        </DelayContent>
      )}
    </div>
  )
}

export default OptionMenu
