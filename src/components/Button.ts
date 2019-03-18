import styled, { css } from 'styled-components'

const blockStyles = css`
  width: 100%;
`

const largeStyles = css`
  padding: 1rem 1.5rem;
  font-size: 1rem;
`

const smallStyles = css`
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
`

interface IButtonProps {
  bgColor?: string
  block?: boolean
  color?: string
  disabledColor?: string
  hoverColor?: string
  large?: boolean
  small?: boolean
}

const Button = styled.button<IButtonProps>`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  padding: 0.75rem 1.25rem;

  background-color: ${p => p.theme[p.bgColor]};
  border: 1px solid transparent;
  border-radius: 3px;
  color: ${p => p.theme[p.color]};
  cursor: pointer;
  outline: none;
  overflow: hidden;

  font-family: ${p => p.theme.fontsans};
  font-size: 0.875rem;
  line-height: 1;
  text-decoration: none;

  &:hover {
    background-color: ${p => p.theme[p.hoverColor]};
  }

  &[disabled] {
    background-color: ${p => p.theme[p.disabledColor]};
    cursor: not-allowed;
  }

  ${p => p.block && blockStyles};
  ${p => p.large && largeStyles};
  ${p => p.small && smallStyles};
`

Button.defaultProps = {
  bgColor: 'black88',
  color: 'white',
  disabledColor: 'black16',
  hoverColor: 'black',
  type: 'button'
}

export default Button
