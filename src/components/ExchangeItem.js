import React, {Component} from 'react'

const Background = (props) => {
  return <div className="blur-background" style={props.style}></div>
}

const bgImageUrl = 'http://www.antelopeslotcanyon.com/images/rocketlauncher/home/showcase/img-05.jpg'

class ExchangeItem extends Component {
  constructor(props) {
    super(props)
    const x = props.x ? props.x : 0;
    const y = props.y ? props.y : 0;
    this.state = {
      dragging: false,
      transitionClass: '',
      x,
      y, 
      style: {
        left: x,
        top: y
      },
      backgroundStyle: {
        background: `url('${bgImageUrl}') no-repeat top -${y}px left -${x}px`
      }
    };
  }

  onDragStart = (e) => {
    console.log('drag start')
    // Find start position of drag based on touch/mouse coordinates.
    const startX = typeof e.clientX === 'undefined' ? e.changedTouches[0].clientX : e.clientX;
    const startY = typeof e.clientY === 'undefined' ? e.changedTouches[0].clientY : e.clientY;
    // Update state with above coordinates, and set dragging to true.
    const state = {
      dragging: true,
      startX,
      startY,
      transitionClass: ''
    };

    this.setState(state);
  }

  onDragMove = (e) => {
    console.log('drag move')
    // First check if the state is dragging, if not we can just return
    // so we do not move unless the user wants to move
    if (!this.state.dragging) {
      return;
    }

    // Get the new x coordinates
    const newX = typeof e.clientX === 'undefined' ? e.changedTouches[0].clientX : e.clientX;
    const newY = typeof e.clientY === 'undefined' ? e.changedTouches[0].clientY : e.clientY;

    // Take the delta where we are minus where we came from.
    const dx = newX - this.state.startX;
    const dy = newY - this.state.startY;

    // Move element using the deltas
    // Update the state
    this.setState({
      style: {
        left: this.state.x,
        top: this.state.y,
        transform: `translate(${dx}px, ${dy}px)`
      },
      backgroundStyle: {
        background: `url('${bgImageUrl}') no-repeat top -${dy + this.state.y}px left -${dx + this.state.x}px`
      }
    });
  }

  onDragEnd = () => {
    this.setState((prevState) => {
      return { 
        dragging: false,
        startX: 0,
        startY: 0,
        transitionClass: 'end-animation',
        style: {left: this.state.x, top: this.state.y},
        backgroundStyle: {
          background: `url('${bgImageUrl}') no-repeat top -${this.state.y}px left -${this.state.x}px`  
        }
      }
    });
  }

  render() {
    return(
      <figure className={'exchange-item ' + this.state.transitionClass}
        style={this.state.style}
        onMouseDown={this.onDragStart}
        onMouseMove={this.onDragMove}
        onMouseUp={this.onDragEnd}
        onMouseOut={this.onDragEnd}
      >
        <Background style={this.state.backgroundStyle} />
        <div className={`flag-icon flag-icon-${this.props.currencyFlagCode}`}>
        </div>
        <div className='currency-name'>{this.props.currencyName}</div>
        <div className='currency-amount'>{this.props.currencyAmount}</div>
        <div className='currency-code'>{this.props.currencyCode}</div>    
      </figure>
    )
  }
}

export default ExchangeItem