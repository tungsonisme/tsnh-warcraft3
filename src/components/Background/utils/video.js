import { EnumPage } from "../../../mobx/page/data"
import HomeVideo from "../videos/home.mp4"
import BeastMasterVideo from "../videos/beast-master.mp4"

export const getBgVideoByPage = (page) => {
  switch (page) {
    case EnumPage.Home:
    case EnumPage.Options:
      return HomeVideo
    case EnumPage.Experience:
      return BeastMasterVideo
    default:
      return null
  }
}

export const changeSrc = (videoDOM, src) => {
  const sourceDom = videoDOM.getElementsByTagName("source")[0]

  videoDOM.pause()
  sourceDom.setAttribute("src", src)
  videoDOM.load()
  videoDOM.play()
}

export const decreaseVolume = (videoDOM) => {
  const fadeAudio = setInterval(function () {
    const newVolume = videoDOM.volume - 0.1
    videoDOM.volume = newVolume < 0.1 ? 0 : newVolume

    if (videoDOM.volume < 0.1) {
      clearInterval(fadeAudio)
    }
  }, 70)
}

export const increaseVolume = (videoDOM) => {
  const fadeAudio = setInterval(function () {
    const newVolume = videoDOM.volume + 0.1
    videoDOM.volume = newVolume > 0.9 ? 1 : newVolume

    if (videoDOM.volume > 0.9) {
      clearInterval(fadeAudio)
    }
  }, 70)
}
