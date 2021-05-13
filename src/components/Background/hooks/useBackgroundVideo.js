import { usePageStore } from "../../../mobx/page/context"
import { useEffect, useRef, useState } from "react"
import { getBgVideoByPage } from "../utils/video"
import { animationSmallTime } from "../../../consts/animation"
import { BackgroundStatus } from "../consts"

export const useBackgroundVideo = () => {
  const { store: pageStore } = usePageStore()
  const { page, withDelay } = pageStore || {}
  const [backgroundStatus, setBackgroundStatus] = useState()
  const [displayBackgroundPage, setDisplayBackgroundPage] = useState(page)
  const lastPage = useRef(page)

  useEffect(() => {
    const lastVideo = getBgVideoByPage(lastPage.current)
    const currentVideo = getBgVideoByPage(page)
    const isVideoChange = lastVideo !== currentVideo

    if (isVideoChange) {
      if (withDelay) {
        setTimeout(() => {
          setBackgroundStatus(BackgroundStatus.DISAPPEARING)
        }, animationSmallTime)

        setTimeout(() => {
          setDisplayBackgroundPage(page)
        }, animationSmallTime * 2)

        setTimeout(() => {
          setBackgroundStatus(BackgroundStatus.APPEARING)
        }, animationSmallTime * 3)
      } else {
        setDisplayBackgroundPage(page)
      }
    }

    lastPage.current = page
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return {
    backgroundStatus,
    backgroundVideo: getBgVideoByPage(displayBackgroundPage),
  }
}
