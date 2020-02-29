import React from 'react';
import SetIcon from './SetIcon';

class CryptoItem extends React.Component {
  constructor(props) {
    super(props);
    this.crypto = this.props.crypto;
    this.state = { change: 0 };
    this.currentPrice = React.createRef();
    this.randomnumbb = Math.random;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log(prevProps.crypto);
    // console.log(prevState);

    var a = parseFloat(this.currentPrice.current.textContent).toFixed(2);
    var b = parseFloat(this.crypto.price).toFixed(2);
    if (this.crypto.id == 'BTC') {
      //   console.log(this.crypto.name, a, b);
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
    if (this.crypto.id == 'BTC') {
      console.log(this.currentPrice.current.textContent);
    }
  }

  render() {
    this.crypto = this.props.crypto;

    // if (this.crypto.id == 'BTC') {
    //   console.log(this.crypto.price);
    // }

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
              <SetIcon key={this.randomnumbb} val={this.state.change} />
            </div>
            <p>
              {
                this.crypto.price_date
                /* ${parseFloat(this.crypto.market_cap / 1000000000).toFixed(2)}B */
              }
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CryptoItem;
