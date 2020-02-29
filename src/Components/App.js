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
      //   console.log(this.state.currentList);
    });
  };

  componentDidMount() {
    this.getLivePrice();
    setTimeout(this.getLivePrice, 7000);
    setTimeout(this.getLivePrice, 14000);
    setTimeout(this.getLivePrice, 21000);
  }

  render() {
    return (
      <div className="container">
        <h1>Cryptocurrency Tracker</h1>
        <CryptoList list={this.state.currentList} />
      </div>
    );
  }
}

export default App;
