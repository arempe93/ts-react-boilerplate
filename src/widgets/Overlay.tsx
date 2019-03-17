import React from 'react'
import ClickoutHandler from 'react-clickout-handler'
import styled from 'styled-components'

const Wrapper = styled.div`
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
  max-width: ${p => p.width}rem;
  width: 100%;
`

const Overlay = ({ children, innerWidth = 40, ...rest }) => (
  <Wrapper>
    <Inner width={innerWidth}>
      <ClickoutHandler events={['mousedown']} wrapWith='div' {...rest}>
        {children}
      </ClickoutHandler>
    </Inner>
  </Wrapper>
)

export default Overlay
