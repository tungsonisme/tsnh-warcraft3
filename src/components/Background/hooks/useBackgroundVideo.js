import { usePageStore } from "../../../mobx/page/context"
import { useEffect, useRef, useState } from "react"
import { getBgVideoByPage } from "../utils/video"
import { animationSmallTime } from "../../../consts/animation"
import { BackgroundStatus } from "../consts"
import { EnumPage } from "../../../mobx/page/data"

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
        setBackgroundStatus(BackgroundStatus.DISAPPEARING)

        setTimeout(() => {
          setDisplayBackgroundPage(page)
        }, animationSmallTime)

        setTimeout(() => {
          setBackgroundStatus(
            page === EnumPage.Home
              ? BackgroundStatus.APPEARING_INSTANTLY
              : BackgroundStatus.APPEARING
          )
        }, animationSmallTime * 2)
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
    displayBackgroundPage,
  }
}
