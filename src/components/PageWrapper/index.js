import React from "react"
import { usePageStore } from "../../mobx/page/context"

const PageWrapper = ({ children }) => {
  const { store } = usePageStore()
  const { transitionStatus } = store

  return <PageWrapper>{children}</PageWrapper>
}

export default PageWrapper
