import styled from 'styled-components'

import Text from '@/components/Text'

const FakeLink = styled(Text)`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

FakeLink.defaultProps = {
  color: 'primary500'
}

export default FakeLink
