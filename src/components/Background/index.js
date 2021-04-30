import styles from "./index.module.scss";
import VideoBackgroundVideo from "./videos/background.mp4";
import SilienceAudio from "./audios/silence.mp3";

const Background = () => {
  return (
    <>
     <iframe src={SilienceAudio} allow="autoplay" width={0} height={0} />
      <video className={styles.background} autoPlay loop muted>
        <source src={VideoBackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.leftBorder} />
      <div className={styles.rightBorder} />
      <div className={styles.leftCorner} />
      <div className={styles.rightCorner} />
    </>
  );
};

export default Background;
