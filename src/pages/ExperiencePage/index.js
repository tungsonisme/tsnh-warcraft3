import styles from "./index.module.scss"
import CompanyItem from "./CompanyItem"
import DelayContent from "../../components/DelayContent"
import { animationSmallTime } from "../../consts/animation"
import ButtonTransparent from "../../components/ButtonTransparent"
import { usePageStore } from "../../mobx/page/context"
import { EnumPage } from "../../mobx/page/data"

const classnames = require("classnames")

const ExperiencePage = ({ isShow }) => {
  const { actions } = usePageStore()
  const { changePage } = actions || {}

  return isShow ? (
    <DelayContent className={classnames(!isShow ? styles.disappearing : null)}>
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
  ) : null
}

export default ExperiencePage
