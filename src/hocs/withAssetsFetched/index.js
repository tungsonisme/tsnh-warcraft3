import React from "react"
import { fetchAllAssets } from "./utils"

function withAssetsFetched(WrappedComponent) {
  return class extends React.Component {
    state = {
      assetLengths: undefined,
      fetchedAssetLengths: 0,
    }

    async componentDidMount() {
      const assetLengths = await fetchAllAssets(this.onAssetsLoaded)
      this.setState({ assetLengths })
    }

    onAssetsLoaded = () => {
      const { fetchedAssetLengths } = this.state
      this.setState({ fetchedAssetLengths: fetchedAssetLengths + 1 })
    }

    render() {
      const { assetLengths, fetchedAssetLengths } = this.state

      return assetLengths && fetchedAssetLengths === assetLengths ? (
        <WrappedComponent {...this.props} />
      ) : null
    }
  }
}

export default withAssetsFetched
