import React from 'react';

import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';

import '../App.css'

import ExchangeItem from '../components/ExchangeItem'
import CustomShape from '../components/CustomShape'
import CustomShape1 from '../components/CustomShape1'

const addBackGroundImage = () => {
  const layout = document.querySelector('body')
  layout.style.backgroundImage = "url(https://cloud.githubusercontent.com/assets/2210733/23931252/e18b4c50-0963-11e7-8075-3a70d4b8320b.jpg)"
  layout.style.backgroundSize = 'cover'
}
const removeBackGroundImage = () => {
  const layout = document.querySelector('body')
  layout.style.backgroundImage = "none"
}

storiesOf('ExchangeItem', module)
.add('custom shape - semi transparent', () => {
    addBackGroundImage()
    return (
      <div style={{
        width: '100%',
        height: '100vh',
        padding: 10,
        position: 'relative',
      }}>
        <div style={{position: 'absolute', top: 100, left: 100}}>
          <CustomShape />
        </div>
        <div style={{position: 'absolute', top: 100, left: 400}}>
          <CustomShape1 debug={false}/>
        </div>
        <div style={{position: 'absolute', top: 100, left: 700}}>
          <CustomShape1 debug={true}/>
        </div>
        <div style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          color: 'white'}}>
          Credit:
          <a style={{color: 'white'}} href="https://cloud.githubusercontent.com/assets/2210733/23931252/e18b4c50-0963-11e7-8075-3a70d4b8320b.jpg">
            {' '}antelopeslotcanyon.com
          </a>
        </div>
      </div>
    )
  })
  .add('single - draggable, semi transparent', () => {
    removeBackGroundImage()
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
  .add('multiple - draggable, semi transparent', () => {
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
        <ExchangeItem {...props.canada} x={12} y={250}/>
        <ExchangeItem {...props.russia} x={170} y={250}/>
        <ExchangeItem {...props.chinese} x={327} y={250}/>

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