import React from 'react';
import SetIcon from './SetIcon';

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
    const getUpdateValue = string => {
      if (this.state.change !== string) {
        this.setState({ change: string });
      }
    };

    if (snapshot === null) {
      getUpdateValue('same');
    } else if (snapshot === true) {
      getUpdateValue('up');
    } else {
      getUpdateValue('down');
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
            <div className="priceWrapper">
              <p ref={this.currentPrice}>
                {parseFloat(this.crypto.price).toFixed(2)}
              </p>
              <SetIcon val={this.state.change} />
            </div>
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
