import styled from 'styled-components'

const Anchor = styled.a.attrs({
  rel: 'noopenner noreferrer'
})`
  color: ${p => p.theme[p.color]};

  &:visited {
    color: ${p => p.theme[p.color]};
  }

  &:hover {
    color: ${p => p.theme[p.hoverColor]};
  }
`

Anchor.defaultProps = {
  color: 'secondary500',
  hoverColor: 'secondary600'
}

export default Anchor
