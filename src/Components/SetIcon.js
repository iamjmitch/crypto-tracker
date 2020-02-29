import React from 'react';

class SetIcon extends React.Component {
  render() {
    switch (this.props.val) {
      case 'up':
        return <i className="fas fa-angle-double-up blinkingG" />;
      case 'down':
        return <i className="fas fa-angle-double-down blinkingR" />;
      default:
        return ' ';
    }
  }
}
export default SetIcon;
