import { Link as _Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import Text from '@/components/Text'

const hoverStyles = css`
  &:hover {
    color: ${p => p.theme[p.hoverColor]};
  }
`

const undecoratedStyles = css`
  text-decoration: none;
`

const Link = styled(Text)`
  ${p => p.hoverColor && hoverStyles};
  ${p => p.undecorated && undecoratedStyles};
`

Link.defaultProps = {
  as: _Link,
  color: 'primary500',
  hoverColor: 'primary500',
  undecorated: false
}

export default Link
