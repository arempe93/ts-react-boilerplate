import React, { Component } from 'react'
import ClickOutHandler from 'react-clickout-handler'
import Transition from 'react-transition-group/Transition'
import styled from 'styled-components'

import Icon from '@/components/Icon'
import Text from '@/components/Text'

import Portal from '@/widgets/Portal'

import { hide, selectSnackbar } from '@/state/snackbar'

import { withState } from '@/util/provider'

const ICONS = {
  success: 'check',
  info: 'info-circle',
  warning: 'exclamation-triangle',
  error: 'times-circle'
}

const duration = 300

const defaultStyle = {
  transform: 'translate3d(0,calc(100% + 80px),0)',
  transition: `transform ${duration}ms ease-in-out`
}

const transitionStyles = {
  entering: { transform: 'translate3d(0,calc(100% + 80px),0)' },
  entered: { transform: 'translate3d(0,0,0)' }
}

const getBackground = (p) => {
  switch (p.type) {
    case 'success':
      return p.theme.green100
    case 'warning':
      return p.theme.blazeOrange
    case 'error':
      return p.theme.red100
    case 'info':
    default:
      return p.theme.green100
  }
}

const Wrapper = styled.div`
  display: flex;
  position: fixed;

  padding-left: 96px;

  border-radius: 2px;

  min-height: 64px;

  background-color: ${p => getBackground(p)};

  @media (${p => p.theme.screens.phoneOnly}) {
    bottom: 0;
    left: 0;
    right: 0;

    min-height: 80px;
  }

  @media (${p => p.theme.screens.smallDesktop}) {
    bottom: 80px;
    left: 50%;

    width: 400px;
    margin-left: -180px;

    box-shadow: ${p => p.theme.liftedMore};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 100%;
  border-radius: 2px 0 0 2px;
  padding: 0 1rem;
`

const Content = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 1rem;
`

class SnackbarRoot extends Component {
  private handleClickOut = () => this.props.visible && hide()

  public render() {
    return (
      <Transition
        unmountOnExit
        in={this.props.visible}
        timeout={{ enter: 0, exit: duration }}
      >
        {state => (
          <Portal>
            <ClickOutHandler
              enabled={this.props.visible}
              refProp='innerRef'
              onClickOut={this.handleClickOut}
            >
              <Wrapper
                role='alert'
                style={{ ...defaultStyle, ...transitionStyles[state] }}
                type={this.props.type}
              >
                <IconWrapper type={this.props.type}>
                  <Icon name={ICONS[this.props.type]} />
                </IconWrapper>
                <Content>
                  <Text>
                    {this.props.message}
                  </Text>
                </Content>
              </Wrapper>
            </ClickOutHandler>
          </Portal>
        )}
      </Transition>
    )
  }
}

export default withState({ select: [selectSnackbar] })(SnackbarRoot)
