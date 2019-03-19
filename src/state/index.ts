import modal from './modal'

import createState from './createState'

const initialState = {
  modal
}

const { StateConsumer, StateProvider, mutate } = createState(initialState)

export { StateConsumer, StateProvider }

export default mutate
