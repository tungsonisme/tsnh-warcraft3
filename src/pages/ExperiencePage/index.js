import styles from "./index.module.scss"
import CompanyItem from "./CompanyItem"
import DelayContent from "../../components/DelayContent"
import ButtonTransparent from "../../components/ButtonTransparent"
import { usePageStore } from "../../mobx/page/context"
import { EnumPage, EnumPageTransitionStatus } from "../../mobx/page/data"
import { observer } from "mobx-react-lite"

const classnames = require("classnames")

const ExperiencePage = () => {
  const { store, actions } = usePageStore()
  const { pageTransitionStatus } = store
  const { changePage } = actions || {}
  const disappearing =
    pageTransitionStatus === EnumPageTransitionStatus.BACKGROUND_DISAPPEARING

  return (
    <DelayContent className={classnames(disappearing ? styles.disappearing : null)}>
      <div className={styles.listCompanyItem}>
        <CompanyItem date="Jun 2021 - Now" name="Shopee" />
        <CompanyItem date="Oct 2020 - Jun 2021" name="SeaGroup (SeaTalk team)" />
        <CompanyItem date="Feb 2019 - Oct 2020" name="SeaGroup (Foody team)" />
        <CompanyItem date="Jan 2018 - Feb 2019" name="SGH Asia" />
        <CompanyItem date="Sep 2016 - Nov 2017" name="Smartdatics" />
      </div>

      <div className={styles.backButton}>
        <ButtonTransparent
          opacity={0.5}
          wrapperStyle={{ transform: `scale(0.8)` }}
          onClick={() => {
            changePage(EnumPage.Home)
          }}
        >
          Back
        </ButtonTransparent>
      </div>
    </DelayContent>
  )
}

export default observer(ExperiencePage)
