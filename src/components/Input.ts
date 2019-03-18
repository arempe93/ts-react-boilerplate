import styled from 'styled-components'

const Input = styled.input`
  padding: 0.75rem 1.25rem;
  width: 100%;

  border: 1px solid ${p => p.theme.black16};
  border-radius: 3px;
  outline: none;

  font-family: ${p => p.theme.fontsans};
  font-size: 0.875rem;
  line-height: 1;

  &:focus {
    border-color: ${p => p.theme.primary500};
  }

  &::-webkit-input-placeholder {
    color: ${p => p.theme.black32};
  }
`

export default Input
