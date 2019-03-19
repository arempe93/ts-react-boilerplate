import mutate from '@/state'

const initialState = {
  component: null,
  props: {}
}

// Actions

export const hide = () => mutate((state) => {
  state.modal = initialState
})

export const show = (component, props = {}) => mutate((state) => {
  state.modal = {
    component,
    props
  }
})

// Selectors

const baseSelector = state => state.modal

export const selectModal = baseSelector

export default initialState
