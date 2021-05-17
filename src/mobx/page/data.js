import { makeAutoObservable } from "mobx"

export const EnumPage = {
  Home: 1,
  Options: 2,
  Summary: 3,
  Experience: 4,
}

export const EnumPageTransitionStatus = {
  NONE: 0,
  DISAPPEARING: 1,
  APPEARING: 2,
  BACKGROUND_DISAPPEARING: 3,
  BACKGROUND_APPEARING: 4,
  DARK_SCREEN: 5,
}

class Data {
  page = undefined
  previousPage = undefined
  backgroundPage = undefined
  pageTransitionStatus = undefined
  pageTransitionData = {}

  constructor() {
    makeAutoObservable(this)
  }

  _changePage = (page) => {
    this.previousPage = this.page
    this.page = page
  }

  _changeBackgroundPage = (backgroundPage) => {
    this.backgroundPage = backgroundPage
  }

  _changePageTransitionStatus = (pageTransitionStatus, pageTransitionData) => {
    this.pageTransitionStatus = pageTransitionStatus
    this.pageTransitionData = pageTransitionData ? pageTransitionData : {}
  }
}

const pageStore = new Data()

export default pageStore
