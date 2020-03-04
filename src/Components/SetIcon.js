import React, { useState, useEffect } from 'react';

const SetIcon = props => {
  let [word, setWord] = useState('same');
  let [oldPrice, setOldPrice] = useState(props.price);

  useEffect(() => {
    var a = parseFloat(props.price).toFixed(2);
    var b = parseFloat(oldPrice).toFixed(2);

    if (a > b) {
      setWord('up');
      setOldPrice(a);
    } else if (a < b) {
      setWord('down');
      setOldPrice(a);
    } else {
      setWord('same');
      setOldPrice(a);
    }
  }, [props.price]);

  let content;

  switch (word) {
    case 'up':
      content = <i className="fas fa-angle-double-up " />;
      break;
    case 'down':
      content = <i className="fas fa-angle-double-down " />;
      break;
    default:
      //return 10px placeholder to stop text moving when no icon shown
      content = <div style={{ width: '10px' }}></div>;
      break;
  }

  return content;
};

export default SetIcon;
