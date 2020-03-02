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
    if (nextProps.price > prevState.newPrice) {
      return {
        word: 'up',
        oldPrice: prevState.newPrice,
        newPrice: nextProps.price
      };
    } else if (nextProps.price < prevState.newPrice) {
      return {
        word: 'down',
        oldPrice: prevState.newPrice,
        newPrice: nextProps.price
      };
    } else {
      return { word: 'icon-same' };
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
