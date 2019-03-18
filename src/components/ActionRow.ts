import styled from 'styled-components'

const ActionRow = styled.div`
  align-items: center;
  display: flex;

  > * + * {
    margin-left: 1rem;
  }
`

export default ActionRow
