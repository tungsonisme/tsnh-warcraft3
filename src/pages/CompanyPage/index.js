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
    title: "Web Frontend",
    logo: SGHLogo,
    infos: [
      "HTML, CSS, jQuery / Ruby on Rails, Java Spring Boot",
      "In charge of building components for frontend of all web applications.",
      "Communicating directly (verbal/oral) to German colleagues for analyzing requirements.",
      "Writing documentations and presenting about applications in English.",
    ],
  },
  [EnumPage.Smartdatics]: {
    title: "Web Fullstack",
    logo: SmartdaticsLogo,
    infos: [
      "React, React Native, Redux, Typescript, jQuery / Node.js, Java Spring Boot, PHP",
      "Build application for visualizing and interacting data with D3.js",
      "Build e-commerce web application using Wordpress and WooCommerce",
      "Design database, build REST API for e-commerce applications using NodeJS.",
    ],
  },
}

const CompanyPage = ({ page }) => {
  const { actions } = usePageStore()
  const { changePage } = actions || {}
  const { title, logo, infos } = pageData[page]

  const backToHome = useCallback(() => {
    changePage(EnumPage.Experience)
  }, [changePage])

  usePressAnyKey(backToHome)
  useClickAnyWhere(backToHome)

  return (
    <>
      <div className={styles.title}>{title}</div>
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
