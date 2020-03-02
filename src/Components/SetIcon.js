import React from 'react';

class SetIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'same',
      newPrice: this.props.price,
      oldPrice: 0
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    var a = parseFloat(nextProps.price).toFixed(2);
    var b = parseFloat(prevState.newPrice).toFixed(2);
    if (a > b) {
      return {
        word: 'up',
        oldPrice: b,
        newPrice: a
      };
    } else if (a < b) {
      return {
        word: 'down',
        oldPrice: b,
        newPrice: a
      };
    } else {
      return {
        word: 'same',
        oldPrice: b,
        newPrice: a
      };
    }
  }

  render() {
    switch (this.state.word) {
      case 'up':
        return <i className="fas fa-angle-double-up " />;
      case 'down':
        return <i className="fas fa-angle-double-down " />;
      default:
        //return 10px placeholder to stop text moving when no icon shown
        return <div style={{ width: '10px' }}></div>;
    }
  }
}
export default SetIcon;
