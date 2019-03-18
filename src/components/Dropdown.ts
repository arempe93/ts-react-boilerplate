import styled, { css } from 'styled-components'

// import Icon from '@components/Icon'

const Dropdown = styled.ul`
  display: flex;
  flex-direction: column;

  background-color: ${p => p.theme.black72};
  border-radius: 3px;
  box-shadow: ${p => p.theme.shadows.robinHood};
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;

  border-top: 1px solid ${p => p.theme.black24};
`

const activeStyles = css`
  background-color: ${p => p.theme[p.hoverColor]};
  outline: none;

  text-decoration: none;
`

export const Item = styled.li`
  align-items: center;
  display: flex;
  height: 3rem;
  padding: 0 1.5rem;

  color: white;
  cursor: pointer;

  &:first-child {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  &:last-child {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  &:hover, &:focus {
    ${activeStyles}
  }

  ${p => p.active && activeStyles}
`

// ^^^ after hover,focus
// ${Icon} {
//   align-items: center;
//   justify-content: center;
//   margin-right: 1rem;
// }

Item.defaultProps = {
  active: false,
  hoverColor: 'black16',
  tabIndex: 0
}

export default Dropdown
