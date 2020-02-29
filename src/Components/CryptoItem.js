import React from 'react';
import SetIcon from './SetIcon';

class CryptoItem extends React.Component {
  constructor(props) {
    super(props);
    this.crypto = this.props.crypto;
    this.change = 'same';
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    var a = parseFloat(prevProps.crypto.price).toFixed(2);
    var b = parseFloat(this.crypto.price).toFixed(2);
    if (this.crypto.id === 'BTC') {
    }

    if (a < b) {
      return true;
    } else if (a > b) {
      return false;
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const getUpdateValue = string => {
      if (this.change !== string) {
        this.change = string;
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
    this.crypto = this.props.crypto;
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
            <p className="cryptoID">{this.crypto.id}</p>
            <p>{this.crypto.name}</p>
            <div className="priceWrapper">
              <p className="textBolding">
                ${parseFloat(this.crypto.price).toFixed(2)}
              </p>
              <SetIcon val={this.change} />
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
