import styled from 'styled-components'

import Input from '@/components/Input'

const Select = styled(Input)`
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: white;

  cursor: pointer;
`

Select.defaultProps = {
  as: 'select'
}

export default Select
