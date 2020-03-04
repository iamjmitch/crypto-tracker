import React from 'react';
import SetIcon from './SetIcon';

const CryptoItem = ({ crypto }) => {
  return (
    <div className="crypto-item">
      <div className="content">
        <div className="cypto-details">
          <div className="imageWrapper">
            <img
              className="ui image"
              src={crypto.logo_url}
              alt={`${crypto.name} logo`}
            />
          </div>
          <p className="cryptoID">{crypto.id}</p>
          <p>{crypto.name}</p>
          <div className="priceWrapper">
            <p className="textBolding">
              ${parseFloat(crypto.price).toFixed(2)}
            </p>
            <SetIcon price={crypto.price} />
          </div>
          <p>${parseFloat(crypto.market_cap / 1000000000).toFixed(2)}B</p>
        </div>
      </div>
    </div>
  );
};

export default CryptoItem;
