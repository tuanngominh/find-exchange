import React from 'react';

import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';

import '../App.css'

import Homepage from '../components/Homepage'

storiesOf('Homepage', module)
  .add('', () => {
    return (
      <Homepage />
    )
  })