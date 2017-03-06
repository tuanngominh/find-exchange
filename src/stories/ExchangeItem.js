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
        <ExchangeItem {...props}  x={100} y={100} />

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
      },
      russia: {
        currencyName: 'Russian Rouble',
        currencyAmount: 62.93,
        currencyFlagCode: 'ru',
        currencyCode: 'RUB'
      },
      chinese: {
        currencyName: 'Chinese Yuan',
        currencyAmount: 6.92,
        currencyFlagCode: 'ca',
        currencyCode: 'CNY'
      }
    }
    return (
      <div style={{
        width: 460,
        height: 460,
        background: "url('http://www.antelopeslotcanyon.com/images/rocketlauncher/home/showcase/img-05.jpg') no-repeat",
        position: 'relative',
        backgroundSize: 'cover',
      }}>
        <ExchangeItem {...props.usa} x={95} y={43}/>
        <ExchangeItem {...props.canada} x={12} y={255}/>
        <ExchangeItem {...props.russia} x={170} y={255}/>
        <ExchangeItem {...props.chinese} x={327} y={255}/>

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