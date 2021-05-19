import styles from "./index.module.scss"
import summaryStyles from "../SummaryPage/index.module.scss"
import { useCallback } from "react"
import { usePageStore } from "../../mobx/page/context"
import { EnumPage } from "../../mobx/page/data"
import { usePressAnyKey } from "../../hooks/usePressAnyKey"
import { useClickAnyWhere } from "../../hooks/useClickAnyWhere"
import { observer } from "mobx-react-lite"
import SmartdaticsLogo from "./images/smartdatics.png"
import SGHLogo from "./images/sgh.jpg"

const pageData = {
  [EnumPage.SGH]: {
    logo: SGHLogo,
    infos: [
      "In charge of building front-end components for all web applications.",
      "Participating in developing generic FormBuilder web application.",
      "Communicating directly (verbal/oral) to German colleagues for analyzing requirements.",
      "Writing documentations and presenting about applications in English.",
    ],
  },
  [EnumPage.Smartdatics]: {
    logo: SmartdaticsLogo,
    infos: [
      "Build web applications, mobile applications with jQuery, React, Redux, Typescript in ES6.",
      "Build application for visualizing and interacting data with D3.js, jQuery.",
      "Design database, build REST API for e-commerce applications with NodeJS.",
      "Other tasks to be assigned.",
    ],
  },
}

const CompanyPage = ({ page }) => {
  const { actions } = usePageStore()
  const { changePage } = actions || {}
  const { logo, infos } = pageData[page]

  const backToHome = useCallback(() => {
    changePage(EnumPage.Experience)
  }, [changePage])

  usePressAnyKey(backToHome)
  useClickAnyWhere(backToHome)

  return (
    <>
      <div className={styles.logo} style={{ backgroundImage: `url(${logo})` }} />
      <div className={styles.infos}>
        {infos.map((info, index) => (
          <div key={index} className={styles.info}>
            {info}
          </div>
        ))}
      </div>
      <div className={summaryStyles.continueBtn} />
    </>
  )
}

export default observer(CompanyPage)
