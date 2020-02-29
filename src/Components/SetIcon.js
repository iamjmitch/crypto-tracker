import React from 'react';

class SetIcon extends React.Component {
  componentDidUpdate() {
    console.log(this.props.val);
  }

  render() {
    if (this.props.val === 'up') {
      return <i className="fas fa-angle-double-up"></i>;
    } else if (this.props.val === 'down') {
      return <i className="fas fa-angle-double-down"></i>;
    } else {
      return null;
    }
  }
}

export default SetIcon;
