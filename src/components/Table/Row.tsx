import styled, { css } from 'styled-components'

import Cell from './Cell'

const activeStyles = css`
  background-color: ${p => p.theme.catskillWhite50};
`

const clickableStyles = css`
  cursor: pointer;

  &:hover {
    background-color: ${p => p.active ? p.theme.catskillWhite : p.theme.black2};

    ${Cell} {
      border-top: 1px solid ${p => p.theme.black2};
    }
  }
`

const Row = styled.tr`
  display: block;

  ${p => p.active && activeStyles};
  ${p => p.onClick && clickableStyles};

  @media (${p => p.theme.screens.tablet}) {
    display: table-row;
  }

  @media (${p => p.theme.screens.phoneOnly}) {
    &:not(:last-child) {
      border-bottom: 2px solid ${p => p.theme.black2};
    }
  }

  &:first-child {
    ${Cell} {
      border-color: transparent;
    }
  }

  &:nth-child(2n) {
    background-color: ${p => p.theme.black2};
  }
`

export default Row
