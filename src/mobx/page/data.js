import { makeAutoObservable } from "mobx"

export const EnumPage = {
  Home: 1,
  Options: 2,
  Summary: 3,
  Experience: 4,
  Smartdatics: 5,
  SGH: 6,
  Foody: 7,
  SeaTalk: 8,
  Shopee: 9,
}

export const EnumPageTransitionStatus = {
  NONE: 0,
  DISAPPEARING: 1,
  APPEARING: 2,
  DARK_SCREEN: 3,
}

export const EnumBackgroundTransitionStatus = {
  NONE: 0,
  DISAPPEARING: 1,
  APPEARING: 2,
}

class Data {
  page = undefined
  previousPage = undefined
  pageTransitionStatus = undefined
  pageTransitionData = {}
  backgroundPage = undefined
  backgroundTransitionStatus = undefined
  backgroundTransitionData = undefined

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

  _changeBackgroundTransitionStatus = (
    backgroundTransitionStatus,
    backgroundTransitionData
  ) => {
    this.backgroundTransitionStatus = backgroundTransitionStatus
    this.backgroundTransitionData = backgroundTransitionData
      ? backgroundTransitionData
      : {}
  }
}

const pageStore = new Data()

export default pageStore
