import React from 'react'

import Overlay from '@/widgets/Overlay'

import { hide, selectModal } from '@/state/modal'

import { withState } from '@/util/provider'

const ModalRoot = ({ component: Component, props }) => (
  Component
    ? <Overlay onClickOut={hide}>
        {React.createElement(Component, {
          ...props,
          onRequestClose: hide
        })}
      </Overlay>
    : null
)

export default withState({ select: [selectModal] })(ModalRoot)
