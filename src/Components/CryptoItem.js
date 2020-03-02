import React from 'react';
import SetIcon from './SetIcon';

class CryptoItem extends React.Component {
  constructor(props) {
    super(props);
    this.crypto = this.props.crypto;
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
              <SetIcon price={this.crypto.price} />
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
