import { EnumPage } from "../../../mobx/page/data"
import LoadingGreenBackground from "../images/loading-green.jpg"
import LoadingIslandBackground from "../images/loading-island.jpg"
import LoadingRedBackground from "../images/loading-red.jpg"
import LoadingYellowBackground from "../images/loading-yellow.jpg"

const loadingBgs = [
  LoadingGreenBackground,
  LoadingIslandBackground,
  LoadingRedBackground,
  LoadingYellowBackground,
]

const getRandomLoadingBg = () => {
  return loadingBgs[Math.floor(Math.random() * 4)]
}

export const getBgImageByPage = (page) => {
  switch (page) {
    case EnumPage.Summary:
      return getRandomLoadingBg()
    default:
      return null
  }
}
