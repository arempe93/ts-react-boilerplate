import React, { ReactElement, ReactNode } from 'react'

import { ModalConsumer } from '@/providers/ModalProvider'

interface IProps {
  children: ReactNode
  component: ReactElement<any, any>
  props?: object
}

const ModalOpener = ({ children, component, props = {} }: IProps) => (
  <ModalConsumer>
    {({ show }) => (
      React.cloneElement(children, {
        onClick: () => show(component, props)
      })
    )}
  </ModalConsumer>
)

export default ModalOpener
