import React from "react"
import TopMenu from "./TopMenu"
import BottomMenu from "./BottomMenu"
import OptionMenu from "./OptionMenu"

const OptionsPage = ({ isShow }) => (
  <div>
    <OptionMenu isShow={isShow} />
    <TopMenu isShow={isShow} />
    <BottomMenu isShow={isShow} />
  </div>
)

export default OptionsPage
