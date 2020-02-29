import React from 'react';

class SetIcon extends React.Component {
  render() {
    switch (this.props.val) {
      case 'up':
        return <i className="fas fa-angle-double-up " />;
      case 'down':
        return <i className="fas fa-angle-double-down " />;
      default:
        return <div style={{ width: '10px' }}></div>;
    }
  }
}
export default SetIcon;
