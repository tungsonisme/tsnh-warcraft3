import React, { useCallback, useState } from "react"
import TopMenu from "./TopMenu"
import BottomMenu from "./BottomMenu"
import OptionMenu from "./OptionMenu"
import { usePageStore } from "../../mobx/page/context"
import { EnumPageTransitionStatus } from "../../mobx/page/data"
import { observer } from "mobx-react-lite"
import { animationSmallTime } from "../../consts/animation"
import { wait } from "../../utils/async"

export const SettingOption = {
  Gameplay: 1,
  Video: 2,
  Sound: 3,
}

const OptionsPage = () => {
  const { store: pageStore, actions } = usePageStore()
  const { pageTransitionStatus } = pageStore || {}
  const { changePage } = actions || {}
  const appearing = pageTransitionStatus === EnumPageTransitionStatus.APPEARING
  const disappearing = pageTransitionStatus === EnumPageTransitionStatus.DISAPPEARING
  const [option, setOption] = useState()
  const [contentAppearing, setContentAppearing] = useState()

  const wrappedSetOption = useCallback(
    async (newOption) => {
      if (option === newOption) {
        return
      }

      if (option) {
        setContentAppearing(false)
        setOption(undefined)
        await wait(animationSmallTime)
      }

      setOption(newOption)
      setContentAppearing(true)
    },
    [option]
  )

  return (
    <div>
      <OptionMenu
        option={option}
        contentAppearing={contentAppearing}
        disappearing={disappearing}
      />
      <TopMenu
        appearing={appearing}
        disappearing={disappearing}
        setOption={wrappedSetOption}
      />
      <BottomMenu
        appearing={appearing}
        disappearing={disappearing}
        option={option}
        changePage={changePage}
      />
    </div>
  )
}

export default observer(OptionsPage)
