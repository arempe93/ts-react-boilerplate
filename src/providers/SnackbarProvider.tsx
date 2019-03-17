import React, { Component } from 'react'

const { Consumer, Provider } = React.createContext({
  hide: () => {},
  message: '',
  show: () => {},
  type: 'success',
  visible: false
})

class SnackbarProvider extends Component {
  public timeout = null

  private cancelTimeout = () => {
    if (this.timeout) window.clearTimeout(this.timeout)
    this.timeout = null
  }

  public hide = () => this.setState({ visible: false }, this.cancelTimeout)

  public show = (message, type = 'success') => this.setState({ message, type, visible: true }, () => {
    this.timeout = window.setTimeout(this.hide, 10500)
  })

  public state = {
    hide: this.hide,
    message: '',
    show: this.show,
    type: 'success',
    visible: false
  }

  public componentWillUnmount() {
    this.cancelTimeout()
  }

  public render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    )
  }
}

export default SnackbarProvider

export { Consumer as SnackbarConsumer }
