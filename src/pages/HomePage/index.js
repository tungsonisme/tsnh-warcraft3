import Logo from "./Logo"
import TopMenu from "./TopMenu"
import BottomMenu from "./BottomMenu"
import { useState } from "react"
import DelayContent from "../../components/DelayContent"
import { usePageStore } from "../../mobx/page/context"
import { EnumPage } from "../../mobx/page/data"
import { animationSmallTime } from "../../consts/animation"

const HomePage = ({ isShow }) => {
  const { store: pageStore } = usePageStore()
  const { previousPage } = pageStore || {}
  const [changingPage, setIsChangingPage] = useState(false)

  return (
    <DelayContent
      delayTime={
        !previousPage || previousPage === EnumPage.Options
          ? 0
          : animationSmallTime * 1.5
      }
    >
      <Logo />
      <TopMenu
        isShow={isShow}
        changingPage={changingPage}
        setIsChangingPage={setIsChangingPage}
      />
      <BottomMenu
        isShow={isShow}
        changingPage={changingPage}
        setIsChangingPage={setIsChangingPage}
      />
    </DelayContent>
  )
}

export default HomePage
