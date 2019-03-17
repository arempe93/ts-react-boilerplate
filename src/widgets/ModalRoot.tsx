import React, { Component } from 'react'
import ClickoutHandler from 'react-clickout-handler'
import styled from 'styled-components'

import { ModalConsumer } from '@/providers/ModalProvider'

const Overlay = styled.div`
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  padding: 4rem 1rem;
  position: fixed;
  right: 0;
  top: 0;

  background-color: ${p => p.theme.black64};
  overflow-y: auto;
  z-index: ${p => p.theme.sizes.strata.modal};

  @media (${p => p.theme.screens.smallDesktop}) {
    padding: 8rem 0;
  }
`

const Inner = styled.div`
  max-width: 40rem;
  width: 100%;
`

const ModalRoot = () => (
  <ModalConsumer>
    {({ component: Component, props, hide }) => (
      Component
        ? <Overlay>
            <Inner>
              <ClickoutHandler wrapWith='div' onClickOut={hide}>
                {React.createElement(Component, {
                  ...props,
                  onRequestClose: hide
                })}
              </ClickoutHandler>
            </Inner>
          </Overlay>
        : null
    )}
  </ModalConsumer>
)

export default ModalRoot
