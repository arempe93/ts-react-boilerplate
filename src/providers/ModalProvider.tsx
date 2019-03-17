import React, { Component } from 'react'

const { Consumer, Provider } = React.createContext({
  component: null,
  hide: () => {},
  props: {},
  show: () => {}
})

class ModalProvider extends Component {
  public show = (component, props = {}) => this.setState({
    component,
    props
  })

  public hide = () => this.setState({
    component: null,
    props: {}
  })

  public state = {
    component: null,
    hide: this.hide,
    props: {},
    show: this.show
  }

  public render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    )
  }
}

export default ModalProvider

export { Consumer as ModalConsumer }
