import React from 'react';

class CryptoItem extends React.Component {
  constructor(props) {
    super(props);
    this.crypto = this.props.crypto;
    this.state = { change: 'same' };
    this.currentPrice = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log(prevProps.crypto);
    // console.log(prevState);

    if (
      parseFloat(prevProps.crypto.price).toFixed(2) ===
      parseFloat(this.crypto.price).toFixed(2)
    ) {
      return null;
    } else if (prevProps.crypto.price > this.crypto.price) {
      return false;
    } else {
      return true;
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot === null) {
      this.setState({ change: 'same' });
    } else if (snapshot === true) {
      this.setState({ change: 'up' });
    } else {
      this.setState({ change: 'down' });
    }
  }

  render() {
    return (
      <div className="crypto-item">
        <div className="content">
          <div className="cypto-details">
            <div className="imageWrapper">
              <img
                className="ui image"
                src={this.crypto.logo_url}
                alt={`${this.crypto.name} logo`}
              />
            </div>
            <p>{this.crypto.id}</p>
            <p>{this.crypto.name}</p>
            <p ref={this.currentPrice}>
              {parseFloat(this.crypto.price).toFixed(2)}
            </p>
            <p>
              ${parseFloat(this.crypto.market_cap / 1000000000).toFixed(2)}B
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CryptoItem;
