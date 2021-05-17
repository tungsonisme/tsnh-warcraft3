import React from "react"
import TopMenu from "./TopMenu"
import BottomMenu from "./BottomMenu"
import OptionMenu from "./OptionMenu"
import { usePageStore } from "../../mobx/page/context"
import { EnumPageTransitionStatus } from "../../mobx/page/data"
import { observer } from "mobx-react-lite"

const OptionsPage = () => {
  const { store: pageStore, actions } = usePageStore()
  const { pageTransitionStatus } = pageStore || {}
  const { changePage } = actions || {}
  const appearing = pageTransitionStatus === EnumPageTransitionStatus.APPEARING
  const disappearing = pageTransitionStatus === EnumPageTransitionStatus.DISAPPEARING

  return (
    <div>
      <OptionMenu appearing={appearing} disappearing={disappearing} />
      <TopMenu appearing={appearing} disappearing={disappearing} />
      <BottomMenu
        appearing={appearing}
        disappearing={disappearing}
        changePage={changePage}
      />
    </div>
  )
}

export default observer(OptionsPage)
