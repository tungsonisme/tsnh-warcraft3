import React from "react"
import { PageStoreContext } from "../../mobx/page/context"

function withAnimationDelay(WrappedComponent) {
  class ClassComponent extends React.Component {
    state = {
      shouldMount: this.props.isShow,
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      const { isShow } = this.props
      const { store } = this.context
      const { withDelay } = store

      if (prevProps.isShow !== isShow) {
        setTimeout(
          () => {
            this.setState({ shouldMount: isShow })
          },
          withDelay ? 800 : 0
        )
      }
    }

    render() {
      const { shouldMount } = this.state
      const { isShow } = this.props

      return shouldMount ? (
        <WrappedComponent {...this.props} isShow={isShow} />
      ) : null
    }
  }

  ClassComponent.contextType = PageStoreContext

  return ClassComponent
}

export default withAnimationDelay
