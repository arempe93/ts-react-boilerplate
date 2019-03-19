import React, { ReactElement, ReactNode } from 'react'

import { show } from '@/state/modal'

interface IProps {
  children: ReactNode
  component: ReactElement<any, any>
  props?: object
}

const ModalOpener = ({ children, component, props = {} }: IProps) => (
  React.cloneElement(children, {
    onClick: () => show(component, props)
  })
)

export default ModalOpener
