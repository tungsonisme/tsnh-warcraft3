import styles from "./index.module.scss"
import VideoBackgroundVideo from "./videos/background.mp4"
import SoundAudio from "./images/sound.png"
import MutedSoundAudio from "./images/muted-sound.png"
import { useRef, useState } from "react"

const classNames = require("classnames")

const Background = () => {
  const videoRef = useRef()
  const [muted, setMuted] = useState(true)

  return (
    <>
      <img
        className={classNames(styles.sound)}
        src={muted ? MutedSoundAudio : SoundAudio}
        alt=""
        onClick={() => {
          setMuted((previousMuted) => {
            const newMuted = !previousMuted
            videoRef.current.muted = newMuted
            return newMuted
          })
        }}
      />
      <video ref={videoRef} className={styles.background} autoPlay loop muted>
        <source src={VideoBackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.leftBorder} />
      <div className={styles.rightBorder} />
      <div className={styles.leftCorner} />
      <div className={styles.rightCorner} />
    </>
  )
}

export default Background
