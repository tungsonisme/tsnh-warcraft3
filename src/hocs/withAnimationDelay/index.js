import React from "react"

function withAnimationDelay(WrappedComponent) {
  return class extends React.Component {
    state = {
      shouldMount: this.props.isShow,
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      const { isShow } = this.props

      if (prevProps.isShow !== isShow) {
        setTimeout(() => {
          this.setState({ shouldMount: isShow })
        }, 800)
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
}

export default withAnimationDelay
