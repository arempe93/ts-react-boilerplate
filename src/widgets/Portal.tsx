import { ReactNode } from 'react'
import ReactDOM from 'react-dom'

interface IProps {
  children: ReactNode
  target?: HTMLElement
}

const Portal = ({ children, target = document.body }: IProps) => (
  ReactDOM.createPortal(children, target)
)

export default Portal
