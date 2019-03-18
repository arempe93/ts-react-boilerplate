import styled from 'styled-components'

const Card = styled.div`
  width: 100%;

  background-color: white;
  border-radius: 3px;
  box-shadow: ${p => p.theme.shadows.lifted};
`

interface ISectionProps {
  padBottom?: boolean
  padTop?: boolean
}

export const Section = styled.div<ISectionProps>`
  padding: 1rem;
  padding-bottom: ${p => p.padBottom ? 1 : 0.5}rem;
  padding-top: ${p => p.padTop ? 1 : 0.5}rem;

  @media (${p => p.theme.screens.tablet}) {
    padding: 1.5rem;
    padding-bottom: ${p => p.padBottom ? 1.5 : 0.5}rem;
    padding-top: ${p => p.padTop ? 1.5 : 0.5}rem;
  }
`

Section.defaultProps = {
  padBottom: false,
  padTop: false
}

export default Card
