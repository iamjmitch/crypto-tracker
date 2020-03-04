import React, { useState, useEffect } from 'react';

import Tracker from '../apis/Tracker';
import CryptoList from './CryptoList';

const App = () => {
  const [currentList, setCurrentList] = useState([]);

  const getLivePrice = async () => {
    await Tracker.get('/ticker', {
      params: {
        convert: 'AUD',
        key: process.env.REACT_APP_CRYPTO,
        ids: 'BTC,ETH,XRP,BCH,USDT,BSV,LTC,EOS,BNB,XTZ'
      }
    }).then(response => {
      setCurrentList(response.data);
    });
  };

  useEffect(() => {
    getLivePrice();
    setTimeout(getLivePrice, 1000);
    setInterval(getLivePrice, 7000);
  }, []);

  return (
    <div className="container">
      <h1>Cryptocurrency Tracker</h1>
      <p>Updates every 7 seconds - Prices in AUD</p>
      <CryptoList list={currentList} />
      <a
        className="nomics"
        href="https://nomics.com"
        target="_blank"
        rel="noopener noreferer">
        Crypto Market Cap & Pricing Data Provided By Nomics.
      </a>
    </div>
  );
};

export default App;
