import styled, { css } from 'styled-components'

const narrowStyles = css`
  width: 1px;

  word-wrap: nowrap;
`

const Cell = styled.td`
  padding: 1rem;

  border-top: 1px solid ${p => p.theme.black4};

  line-height: 1.42857;

  width: ${p => p.width ? p.width : 'auto'};
  text-align: ${p => p.right ? 'right' : 'left'};
  vertical-align: middle;

  &:first-child {
    padding-left: 1.5rem;
  }

  &:last-child {
    padding-right: 1.5rem;
  }

  ${p => p.narrow && narrowStyles};

  @media (${p => p.theme.screens.xs}) {
    align-items: center;
    display: flex;
    justify-content: space-between;

    border-color: transparent;

    &:before {
      content: attr(data-label);

      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`

export default Cell
