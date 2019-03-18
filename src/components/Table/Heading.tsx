import styled from 'styled-components'

import Cell from './Cell'

const Heading = styled(Cell).attrs({
  as: 'th'
})`
  border: none;
  border-bottom: 1px solid ${p => p.theme.black4};
  color: ${p => p.theme.riverBed};

  font-size: 0.875rem;
  font-weight: 700;

  vertical-align: bottom;
`

export default Heading
