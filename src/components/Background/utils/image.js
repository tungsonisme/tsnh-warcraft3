import { EnumPage } from "../../../mobx/page/data"
import LoadingGreenBackground from "../images/loading-green.jpg"
import LoadingIslandBackground from "../images/loading-island.jpg"
import LoadingRedBackground from "../images/loading-red.jpg"
import LoadingYellowBackground from "../images/loading-yellow.jpg"
import CustomGameBackground from "../images/custom-game.png"

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
    case EnumPage.Shopee:
    case EnumPage.SeaTalk:
    case EnumPage.Foody:
    case EnumPage.SGH:
    case EnumPage.Smartdatics:
      return CustomGameBackground
    default:
      return null
  }
}
