import { usePageStore } from "../../../mobx/page/context"
import { useEffect, useMemo, useRef, useState } from "react"
import { animationSmallTime } from "../../../consts/animation"
import { getBgImageByPage } from "../utils/image"

export const useBackgroundImage = () => {
  const { store: pageStore } = usePageStore()
  const { page } = pageStore || {}
  const [displayBackgroundPage, setDisplayBackgroundPage] = useState(page)
  const lastPage = useRef(page)

  useEffect(() => {
    const lastImage = getBgImageByPage(lastPage.current)
    const currentImage = getBgImageByPage(page)
    const isImageChange = lastImage !== currentImage

    if (isImageChange) {
      setTimeout(
        () => {
          setDisplayBackgroundPage(page)
        },
        currentImage ? animationSmallTime * 2 : 0
      )
    }

    lastPage.current = page
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const backgroundImage = useMemo(
    () => getBgImageByPage(displayBackgroundPage),
    [displayBackgroundPage]
  )

  return {
    backgroundImage,
  }
}
