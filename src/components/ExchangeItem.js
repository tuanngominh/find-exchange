import React, {Component} from 'react'

class ExchangeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragging: false,
      dx: 0,
      dy: 0,
      transitionClass: ''
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
      dx: 0,
      dy: 0,
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
      dx: dx,
      dy: dy,
    });
  }

  onDragEnd = () => {
    console.log('drag end')
    this.setState((prevState) => {
      return { 
        dragging: false,
        dx: 0,
        dy: 0,
        startX: 0,
        startY: 0,
        transitionClass: 'end-animation'
      }
    });
  }

  render() {
    let style
    if (!this.state.transitionClass) {
      style = {
        transform: `translate(${this.state.dx}px, ${this.state.dy}px)`
      }
    } else {
      style={}
    }
    
    return(
      <figure className={'exchange-item ' + this.state.transitionClass}
        style={style}
        onMouseDown={this.onDragStart}
        onMouseMove={this.onDragMove}
        onMouseUp={this.onDragEnd}
        onMouseOut={this.onDragEnd}
      >
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