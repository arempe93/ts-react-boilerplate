import React from 'react'

export const withConsumer = (Consumer, ...stateKeys) => (Component) => (props) => (
  <Consumer>
    {(state => {
      const consumerProps = stateKeys.length > 0
        ? stateKeys.reduce((a, e) => ({ ...a, [e]: state[e] }), {})
        : state

      return (
        <Component {...props} {...consumerProps} />
      )
    })}
  </Consumer>
)
