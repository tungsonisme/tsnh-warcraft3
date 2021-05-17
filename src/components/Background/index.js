import styles from "./index.module.scss"
import SoundAudio from "./images/sound.png"
import MutedSoundAudio from "./images/muted-sound.png"
import { useEffect, useRef, useState } from "react"
import { HavingBorderPages } from "./consts"
import { changeSrc, getBgVideoByPage } from "./utils/video"
import { usePageStore } from "../../mobx/page/context"
import { EnumPageTransitionStatus } from "../../mobx/page/data"
import { observer } from "mobx-react-lite"
import { getBgImageByPage } from "./utils/image"

const classnames = require("classnames")

const Background = () => {
  const videoRef = useRef()
  const [muted, setMuted] = useState(true)
  const { store: pageStore } = usePageStore()
  const { pageTransitionStatus, backgroundPage } = pageStore || {}
  const backgroundVideo = getBgVideoByPage(backgroundPage)
  const backgroundImage = getBgImageByPage(backgroundPage)
  const appearing =
    pageTransitionStatus === EnumPageTransitionStatus.BACKGROUND_APPEARING ||
    pageTransitionStatus === EnumPageTransitionStatus.DARK_SCREEN
  const disappearing =
    pageTransitionStatus === EnumPageTransitionStatus.BACKGROUND_DISAPPEARING

  useEffect(() => {
    const videoDOM = videoRef.current
    changeSrc(videoDOM, backgroundVideo)

    // decreaseVolume(videoDOM)
    //
    // setTimeout(() => {
    //   changeSrc(videoDOM, backgroundVideo)
    // }, animationSmallTime)
    //
    // if (backgroundVideo) {
    //   setTimeout(() => {
    //     increaseVolume(videoDOM)
    //   }, animationSmallTime * 2)
    // }
  }, [backgroundVideo])

  return (
    <>
      {!backgroundImage && HavingBorderPages.includes(backgroundPage) && (
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
          appearing && styles.appearing,
          disappearing && styles.disappearing
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

      {HavingBorderPages.includes(backgroundPage) && (
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

export default observer(Background)
