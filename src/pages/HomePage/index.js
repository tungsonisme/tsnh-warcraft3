import Logo from "./Logo"
import TopMenu from "./TopMenu"
import BottomMenu from "./BottomMenu"

const HomePage = ({ isShow }) => {
  return (
    <div>
      <Logo />
      <TopMenu isShow={isShow} />
      <BottomMenu isShow={isShow} />
    </div>
  )
}

export default HomePage
