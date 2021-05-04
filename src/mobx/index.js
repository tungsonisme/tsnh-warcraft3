import { createContext, useContext } from "react"
import pageStore from "./page"

const MobxStoreContext = createContext("mobxStore")
const useMobxStore = () => useContext(MobxStoreContext)

const MobxStoreProvider = ({ children }) => {
  return (
    <MobxStoreContext.Provider value={{ pageStore }}>
      {children}
    </MobxStoreContext.Provider>
  )
}

export { MobxStoreContext, useMobxStore, MobxStoreProvider }
