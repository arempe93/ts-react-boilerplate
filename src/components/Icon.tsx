import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

interface IProps {
  name: IconName
  prefix: IconPrefix
}

const Icon = ({ name, prefix, ...rest }: IProps) => (
  <FontAwesomeIcon icon={[prefix, name]} {...rest} />
)

Icon.defaultProps = {
  className: '',
  prefix: 'fas'
}

export default styled(Icon)``
