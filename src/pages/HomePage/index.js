import { observer } from "mobx-react-lite"
import Logo from "./Logo"
import TopMenu from "./TopMenu"
import BottomMenu from "./BottomMenu"
import { usePageStore } from "../../mobx/page/context"
import { EnumPageTransitionStatus } from "../../mobx/page/data"

const HomePage = () => {
  const { store: pageStore, actions } = usePageStore()
  const { pageTransitionStatus } = pageStore || {}
  const { changePage } = actions || {}
  const appearing = pageTransitionStatus === EnumPageTransitionStatus.APPEARING
  const disappearing =
    pageTransitionStatus === EnumPageTransitionStatus.DISAPPEARING ||
    pageTransitionStatus === EnumPageTransitionStatus.BACKGROUND_DISAPPEARING

  return (
    <>
      <Logo />
      <TopMenu
        appearing={appearing}
        disappearing={disappearing}
        changePage={changePage}
      />
      <BottomMenu appearing={appearing} disappearing={disappearing} />
    </>
  )
}

export default observer(HomePage)
