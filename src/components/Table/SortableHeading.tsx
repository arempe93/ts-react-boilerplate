// @flow

import React from 'react'
import styled from 'styled-components'

import Heading from './Heading'

// const Arrow = styled(Icon)`
//   height: 1.5rem;
//   position: absolute;
//   right: 0;
//   top: 50%;

//   transform: translateY(-50%);
// `

export const Wrapper = styled(Heading)`
  cursor: pointer;

  &:hover {
    color: ${p => p.theme.deepCerulean};
  }
`

//  ^^^ in :hover
// ${Arrow} {
//   color: ${p => p.theme.deepCerulean};
// }

const Content = styled.span`
  display: inline;
  position: relative;

  padding-right: 1.5rem;
`

type SortDirection = 'asc' | 'desc'

interface IOnClickProps {
  sortBy: string
  sortDirection: SortDirection
}

interface IProps {
  children: Node
  name: string
  sortBy: string
  sortDirection: SortDirection
  onClick: (props: IOnClickProps) => void
}

export const SortableHeading = ({ children, name, sortBy, sortDirection, onClick, ...rest }: IProps) => {
  const isActive = () => sortBy === name

  const getNextDirection = (): SortDirection => {
    if (!isActive()) return 'asc'
    if (sortDirection === 'asc') return 'desc'
    return 'asc'
  }

  const handleClick = () => {
    onClick({
      sortBy: name,
      sortDirection: getNextDirection()
    })
  }

  const arrowDirection = sortDirection === 'asc' ? 'up' : 'down'

  return (
    <Wrapper {...rest} onClick={handleClick}>
      <Content>
        {children}
        {/*isActive() && <Arrow name={`arrow drop ${arrowDirection}`} size={24} />*/}
      </Content>
    </Wrapper>
  )
}

export default SortableHeading
