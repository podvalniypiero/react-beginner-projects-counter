import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  const [fromCurrency, setFromCurrency] = React.useState('RUB');
  const [toCurrency, setToCurrency] = React.useState('USD');
  const [fromPrice, setFromPrice] = React.useState(0);
  const [toPrice, setToPrice] = React.useState(1);

  //const [rates, setRates] = React.useState({});
  const ratesRef = React.useRef({});

  React.useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then((json)=> {
      // setRates(json.rates); // async func due to state 
      ratesRef.current = json.rates;
      onChangeToPrice(1);

    })
    .catch(err => {
      console.log(err);
      alert('Error! No data from server...')
    })
  },[]);

  const onChangeFromPrice = (value) => {
    const price =  (value / ratesRef.current[fromCurrency]).toFixed(2);
    const result = price * ratesRef.current[toCurrency];
    setToPrice(result.toFixed(3));
    setFromPrice(value);
    
  };

  const onChangeToPrice = (value) => {
    const result = (ratesRef.current[fromCurrency]/ratesRef.current[toCurrency]) * value;
    setFromPrice(result.toFixed(3));
    setToPrice(value);
  };

//  const onChangeFromCurrency = (cur) => {
//   setFromCurrency(cur);
//   onChangeFromPrice(fromPrice);
//  }

    React.useEffect(() => {
      onChangeFromPrice(fromPrice)
    }, [fromCurrency]);

    React.useEffect(() => {
      onChangeToPrice(toPrice)
    }, [toCurrency]);

  return (
    <div className="App">

      <Block value = {fromPrice} 
      currency = {fromCurrency} 
      onChangeCurrency = {setFromCurrency} 
      onChangeValue = {onChangeFromPrice}/>
      
      <Block value = {toPrice} 
      currency = {toCurrency} 
      onChangeCurrency = {setToCurrency} 
      onChangeValue = {onChangeToPrice} />
      
    </div>
  );
}

export default App;
