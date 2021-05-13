import styles from "./index.module.scss"
import SoundAudio from "./images/sound.png"
import MutedSoundAudio from "./images/muted-sound.png"
import { useEffect, useRef, useState } from "react"
import { useBackgroundVideo } from "./hooks/useBackgroundVideo"
import { BackgroundStatus, HavingBorderPages } from "./consts"
import { changeSrc, decreaseVolume, increaseVolume } from "./utils/video"
import { animationSmallTime } from "../../consts/animation"
import { useBackgroundImage } from "./hooks/useBackgroundImage"

const classnames = require("classnames")

const Background = () => {
  const videoRef = useRef()
  const [muted, setMuted] = useState(true)
  const { backgroundStatus, backgroundVideo, displayBackgroundPage } =
    useBackgroundVideo()
  const { backgroundImage } = useBackgroundImage()

  useEffect(() => {
    const videoDOM = videoRef.current

    decreaseVolume(videoDOM)

    setTimeout(() => {
      changeSrc(videoDOM, backgroundVideo)
    }, animationSmallTime)

    if (backgroundVideo) {
      setTimeout(() => {
        increaseVolume(videoDOM)
      }, animationSmallTime * 2)
    }
  }, [backgroundVideo])

  return (
    <>
      {!backgroundImage && HavingBorderPages.includes(displayBackgroundPage) && (
        <img
          className={classnames(styles.sound)}
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
      )}

      <video
        ref={videoRef}
        className={classnames(
          styles.backgroundVideo,
          backgroundStatus === BackgroundStatus.APPEARING && styles.appearing,
          backgroundStatus === BackgroundStatus.APPEARING_INSTANTLY &&
            styles.appearingInstantly,
          backgroundStatus === BackgroundStatus.DISAPPEARING && styles.disappearing
        )}
        autoPlay
        loop
        muted
      >
        <source type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />

      {HavingBorderPages.includes(displayBackgroundPage) && (
        <>
          <div className={styles.leftBorder} />
          <div className={styles.rightBorder} />
          {!backgroundImage && (
            <>
              <div className={styles.leftCorner} />
              <div className={styles.rightCorner} />
            </>
          )}
        </>
      )}
    </>
  )
}

export default Background
