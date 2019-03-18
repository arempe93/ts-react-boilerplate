import styled from 'styled-components'

import Text from '@/components/Text'

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

interface ILabelProps {
  as?: string,
  color?: string,
  size?: number
}

export const Label = styled(Text)<ILabelProps>`
  display: block;
  margin-bottom: 0.5rem;
`

Label.defaultProps = {
  as: 'label',
  color: 'black64',
  size: 0.75
}

export default FormGroup
