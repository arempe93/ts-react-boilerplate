import React from 'react'

import { storiesOf } from '@storybook/react'

import Text from '@/components/Text'

import Padding from '../Padding'

storiesOf('components/Text', module)
  .add('default', () => (
    <Padding>
      <Text
        as='h1'
        size={2}
        weight={700}
      >
        Lorem ipsum dolor sit amet
      </Text>
      <Text
        as='h2'
        size={1.5}
        weight={700}
      >
        Lorem ipsum dolor sit amet
      </Text>
      <Text
        as='h3'
        size={1.25}
        weight={500}
      >
        Lorem ipsum dolor sit amet
      </Text>
      <Text as='p'>
        Lorem ipsum dolor sit amet
      </Text>
    </Padding>
  ))
