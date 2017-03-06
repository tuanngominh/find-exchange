import React from 'react';

import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';

import '../App.css'

import ExchangeItem from '../components/ExchangeItem'

storiesOf('ExchangeItem', module)
  .add('single item', () => {
    const props = {
      currencyName: 'USD Dolllar',
      currencyAmount: 1,
      currencyFlagCode: 'us',
      currencyCode: 'USD'
    }
    return (
      <div style={{
        width: 460,
        height: 460,
        background: "url('http://www.antelopeslotcanyon.com/images/rocketlauncher/home/showcase/img-05.jpg') no-repeat",
        padding: 10,
        position: 'relative',
        backgroundSize: 'cover',
      }}>
        <ExchangeItem {...props} />

        <div style={{
          position: 'absolute', 
          bottom: 10,
          right: 10,
          color: 'white'}}>
          Credit:  
          <a style={{color: 'white'}} href="http://www.antelopeslotcanyon.com/images/rocketlauncher/home/showcase/img-05.jpg">
            {' '}antelopeslotcanyon.com
          </a> 
        </div>
      </div>
    )
  })
  .add('multiple items', () => {
    const props = {
      usa: {
        currencyName: 'USD Dolllar',
        currencyAmount: 1,
        currencyFlagCode: 'us',
        currencyCode: 'USD'
      },
      canada: {
        currencyName: 'Canadian Dollar',
        currencyAmount: 1.31,
        currencyFlagCode: 'ca',
        currencyCode: 'CAD'
      }
    }
    return (
      <div style={{
        width: 460,
        height: 460,
        background: "url('http://www.antelopeslotcanyon.com/images/rocketlauncher/home/showcase/img-05.jpg') no-repeat",
        padding: 10,
        position: 'relative',
        backgroundSize: 'cover',
      }}>
        <ExchangeItem {...props.usa} />
        <ExchangeItem {...props.canada} />

        <div style={{
          position: 'absolute', 
          bottom: 10,
          right: 10,
          color: 'white'}}>
          Credit:  
          <a style={{color: 'white'}} href="http://www.antelopeslotcanyon.com/images/rocketlauncher/home/showcase/img-05.jpg">
            {' '}antelopeslotcanyon.com
          </a> 
        </div>
      </div>
    )
  })