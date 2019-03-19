import produce from 'immer'
import React, { Component } from 'react'

const naiveEqualityCheck = (prev, next) => prev === next

const selectEverything = state => state

const createState = (equalityCompare = naiveEqualityCheck) => {
  let updateState = null
  const { Provider, Consumer } = React.createContext({})

  const mutate = (fn) => {
    if (updateState === null) {
      throw 'Trying to mutate too soon'
    }

    return updateState(fn)
  }

  class StateProvider extends Component {
    state = this.props.value

    componentDidMount() {
      if (updateState !== null) {
        throw 'Only mount a single provider'
      }

      updateState = this.updateState
    }

    componentWillUnmount() {
      updateState = null
    }

    updateState = fn => this.setState(produce(fn))

    render() {
      return (
        <Provider value={this.state}>
          {this.props.children}
        </Provider>
      )
    }
  }

  class ConsumerOptimization extends Component {
    static defaultProps = {
      version: null
    }

    shouldComponentUpdate(nextProps) {
      if (this.props.version !== nextProps.version) {
        return true
      }

      return this.props.state.some((element, idx) => (
        !equalityCompare(element, nextProps.state[idx])
      ))
    }

    render() {
      const { children, state } = this.props

      return children(...state)
    }
  }

  class StateConsumer extends Component {
    static defaultProps = {
      impure: false,
      select: [selectEverything]
    }

    static getDerivedStateFromProps(props, state) {
      return {
        version: state.version + 1
      }
    }

    state = {
      version: 0
    }

    renderConsumer = (state) => {
      const { children, impure, render, select } = this.props
      const { version } = this.state
      const selectedState = this.props.select.map(fn => fn(state))

      const props = impure ? { version } : {}

      return (
        <ConsumerOptimization {...props} state={selectedState}>
          {typeof render === 'function' ? render : children}
        </ConsumerOptimization>
      )
    }

    render() {
      return (
        <Consumer>
          {this.renderConsumer}
        </Consumer>
      )
    }
  }

  return {
    StateConsumer,
    StateProvider,
    mutate
  }
}

export default createState
