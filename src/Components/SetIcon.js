import React from 'react';

class SetIcon extends React.Component {
  render() {
    switch (this.props.val) {
      case 'up':
        return <i className="fas fa-angle-double-up">up</i>;
      case 'down':
        return <i className="fas fa-angle-double-down">down</i>;
      case 'same':
        return 'same ';
      default:
        return 'null ';
    }
  }
}
export default SetIcon;
