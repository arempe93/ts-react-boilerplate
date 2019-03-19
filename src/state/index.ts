import createState from './createState'

const initialState = {}

const { StateConsumer, StateProvider, mutate } = createState(initialState)

export { StateConsumer, StateProvider }

export default mutate
