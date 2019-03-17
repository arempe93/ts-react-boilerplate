import React from 'react'

import Overlay from '@/widgets/Overlay'

import { ModalConsumer } from '@/providers/ModalProvider'

const ModalRoot = () => (
  <ModalConsumer>
    {({ component: Component, props, hide }) => (
      Component
        ? <Overlay onClickOut={hide}>
            {React.createElement(Component, {
              ...props,
              onRequestClose: hide
            })}
          </Overlay>
        : null
    )}
  </ModalConsumer>
)

export default ModalRoot
