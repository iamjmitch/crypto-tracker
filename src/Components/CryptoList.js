import React from 'react';
import CryptoItem from './CryptoItem';

const CryptoList = ({ list }) => {
  const renderedList = list.map(crypto => {
    return <CryptoItem key={crypto.id} crypto={crypto} />;
  });
  return (
    <div className="ui relaxed divided list">
      <div className="crypto-item bold">
        <div className="content">
          <div className="cypto-details">
            <div className="imageWrapper"></div>
            <p>ID</p>
            <p>Name</p>
            <p>Price</p>
            <p>Market Cap</p>
          </div>
        </div>
      </div>
      {renderedList}
    </div>
  );
};

export default CryptoList;
