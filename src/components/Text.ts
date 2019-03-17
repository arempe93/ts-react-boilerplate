import styled, { css } from 'styled-components'

interface ITextProps {
  color?: string
  size?: number
  weight?: 300 | 400 | 500 | 600 | 700 | 800 | 900
}

const Text = styled.span<ITextProps>`
  color: ${p => p.theme[p.color]};
  font-family: ${p => p.theme.font};
  font-size: ${p => p.size}rem;
  font-weight: ${p => p.weight};
`

Text.defaultProps = {
  color: 'black72',
  size: 1,
  weight: 400
}

export default Text
