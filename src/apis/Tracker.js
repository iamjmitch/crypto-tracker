import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.nomics.com/v1/currencies'
});
