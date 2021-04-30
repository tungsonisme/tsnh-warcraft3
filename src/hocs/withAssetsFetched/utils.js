import { assetURLs } from "./assets"

class Media extends Audio {}

export const fetchAllAssets = async (onAssetsLoaded) => {
  assetURLs.forEach((assetURL) => {
    const fragmentOfURL = assetURL.split(".")
    const extension = fragmentOfURL[fragmentOfURL.length - 1]
    const isMedia = ["mp4", "mp3"].includes(extension)
    const asset = isMedia ? new Media() : new Image()

    if (onAssetsLoaded) {
      if (isMedia) {
        asset.onloadeddata = onAssetsLoaded
      } else {
        asset.onload = onAssetsLoaded
      }
    }

    asset.src = assetURL
  })

  return assetURLs.length
}
