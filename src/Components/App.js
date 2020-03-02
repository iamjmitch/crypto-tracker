import React from 'react';
// import axios from 'axios';
import Tracker from '../apis/Tracker';
import CryptoList from './CryptoList';

class App extends React.Component {
  state = { currentList: [] };

  getLivePrice = async () => {
    // console.log('check');
    await Tracker.get('/ticker', {
      params: {
        convert: 'AUD',
        key: process.env.REACT_APP_CRYPTO,
        ids: 'BTC,ETH,XRP,BCH,USDT,BSV,LTC,EOS,BNB,XTZ'
      }
    }).then(response => {
      this.setState({
        currentList: response.data
      });
    });
  };

  componentDidMount() {
    this.getLivePrice();
    setTimeout(this.getLivePrice, 1000);
    setInterval(this.getLivePrice, 7000);
  }

  render() {
    return (
      <div className="container">
        <h1>Cryptocurrency Tracker</h1>
        <p>Updates every 7 seconds - Prices in AUD</p>
        <CryptoList list={this.state.currentList} />
        <a
          className="nomics"
          href="https://nomics.com"
          target="_blank"
          rel="noopener noreferer">
          Crypto Market Cap & Pricing Data Provided By Nomics.
        </a>
      </div>
    );
  }
}

export default App;
