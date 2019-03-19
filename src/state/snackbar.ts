import mutate from '@/state'

const initialState = {
  message: '',
  type: 'success',
  visible: false
}

// Actions

export const hide = () => mutate((state) => {
  state.snackbar.visible = false
})

export const show = (message, type = 'success', timeout = 2500) => mutate((state) => {
  state.snackbar = {
    message,
    type,
    visible: true
  }

  window.setTimeout(hide, timeout)
})

// Selectors

const baseSelector = state => state.snackbar

export const selectSnackbar = state => baseSelector(state)

export default initialState
