import React, { Component } from 'react'
import ClickOutHandler from 'react-clickout-handler'
import { Manager, Popper, Reference } from 'react-popper'
import styled from 'styled-components'

import Portal from '@/widgets/Portal'

import Animation from './Animation'

const Wrapper = styled.div`
  max-height: 50vh;
  max-width: 30rem;
  min-width: 16rem;
  overflow-y: auto;

  background-clip: padding-box;
  background-color: white;
  border: 1px solid #f4f4f5;
  box-shadow: ${p => p.theme.shadows.robinHood};
`

const Trigger = styled.div``

export class Popout extends Component {
  static defaultProps = {
    activeClassName: 'active',
    closeOnClick: true,
    isOpen: false,
    modifiers: {},
    offsetLeft: 0,
    offsetTop: 0,
    placement: 'bottom-end',
    transformOrigin: 'top right',
    onChange: () => {}
  }

  state = {
    isOpen: this.props.isOpen
  }

  clickable = null

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen && this.props.isOpen !== this.state.isOpen) {
      this.setState({ isOpen: this.props.isOpen })
    }
  }

  handleClick = (ev) => {
    ev.preventDefault()
    ev.stopPropagation()

    this.setState({ isOpen: !this.state.isOpen }, () => {
      this.props.onChange(this.state.isOpen)
    })
  }

  handleClickOut = () => {
    this.setState({ isOpen: false })
  }

  setRef = (el) => { this.clickable = el }

  render() {
    const { offsetLeft, offsetTop } = this.props
    const { isOpen } = this.state

    const modifiers = {
      flip: { enabled: false },
      offset: { enabled: true, offset: `${offsetLeft}px, ${offsetTop}px` },
      preventOverflow: { boundariesElement: 'viewport' },
      ...this.props.modifiers
    }

    const closeHandler = this.props.closeOnClick ? { onClick: this.handleClick } : {}

    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            <Trigger ref={ref}>
              {React.cloneElement(this.props.children, {
                isOpen: this.state.isOpen,
                onClick: this.handleClick
              })}
            </Trigger>
          )}
        </Reference>
        <Portal>
          <Popper
            placement={this.props.placement}
            modifiers={modifiers}
          >
            {({ ref, style, placement }) => (
              <div
                data-placement={placement}
                ref={ref}
                style={{ ...style, pointerEvents: isOpen ? 'all' : 'none' }}
                {...closeHandler}
              >
                <Animation
                  in={this.state.isOpen}
                  transformOrigin={this.props.transformOrigin}
                >
                  <ClickOutHandler
                    enabled={isOpen}
                    ignoredElements={[this.clickable]}
                    onClickOut={this.handleClickOut}
                  >
                    <Wrapper>
                      {this.props.component}
                    </Wrapper>
                  </ClickOutHandler>
                </Animation>
              </div>
            )}
          </Popper>
        </Portal>
      </Manager>
    )
  }
}

export default Popout
