import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = { currentList: [] };

  getLivePrice = async () => {
    const response = axios
      .get('https://api.coinmarketcap.com/v1/ticker/')
      .then(response => {
        this.setState({ currentList: response.data });
        console.log(this.state.currentList);
      });
  };

  componentDidMount() {
    this.getLivePrice();
  }

  render() {
    return <div>App</div>;
  }
}

export default App;
