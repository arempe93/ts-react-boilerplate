import React, { ReactNode } from 'react'
import Transition from 'react-transition-group/Transition'

const duration = 245

const defaultStyle = {
  transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 163ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
  opacity: 0,
  transform: 'scale3d(0.8,0.8,0.8)'
}

interface ITransitionStyle {
  opacity: number
  transform: string
}

interface ITransitionStylesConfig {
  entering: ITransitionStyle
  entered: ITransitionStyle
}

const transitionStyles: ITransitionStylesConfig = {
  entered: { opacity: 1, transform: 'scale3d(1,1,1)' },
  entering: { opacity: 0, transform: 'scale3d(0.8,0.8,0.8)' }
}

interface IProps {
  children: ReactNode
  in: boolean
  transformOrigin: string
}

const Animation = ({ children, in: inProp, transformOrigin }: IProps) => (
  <Transition
    in={inProp}
    timeout={{ enter: 0, exit: duration }}
  >
    {state => (
      <div style={{ ...defaultStyle, ...transitionStyles[state], transformOrigin }}>
        {children}
      </div>
    )}
  </Transition>
)

export default Animation
