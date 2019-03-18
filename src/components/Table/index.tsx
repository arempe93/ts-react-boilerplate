import styled from 'styled-components'

import Cell from './Cell'
import Head from './Head'
import Heading from './Heading'
import Row from './Row'
import SortableHeading from './SortableHeading'

const Table = styled.table`
  margin-bottom: 1.5rem;
  width: 100%;

  border-collapse: collapse;
`

export default Table

export const Body = styled.tbody``
export { Cell, Head, Heading, Row, SortableHeading }
