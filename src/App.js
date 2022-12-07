import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  const [fromCurrency, setFromCurrency] = React.useState('USD');
  const [toCurrency, setToCurrency] = React.useState('RUB');
  const [fromPrice, setFromPrice] = React.useState(0);
  const [toPrice, setToPrice] = React.useState(0);

  const [rates, setRates] = React.useState({});

  React.useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then((json)=> {
      setRates(json.rates);
      console.log(json.rates);

    })
    .catch(err => {
      console.log(err);
      alert('Error! No data from server...')
    })
  },[]);

  const onChangeFromPrice = (value) => {
    const price =  (value / rates[fromCurrency]).toFixed(2);
    const result = price * rates[toCurrency];
    setToPrice(result);
    setFromPrice(value);
    
  };

  const onChangeToPrice = (value) => {
    const result = (rates[fromCurrency]/rates[toCurrency]) * value;
    setFromPrice(result);
    setToPrice(value);
  };

 const onChangeFromCurrency = (cur) => {
  setFromCurrency(cur);
  onChangeFromPrice(fromPrice);
 }

  return (
    <div className="App">

      <Block value = {fromPrice} 
      currency = {fromCurrency} 
      onChangeCurrency = {onChangeFromCurrency} 
      onChangeValue = {onChangeFromPrice}/>
      
      <Block value = {toPrice} 
      currency = {toCurrency} 
      onChangeCurrency = {setToCurrency} 
      onChangeValue = {onChangeToPrice} />
      
    </div>
  );
}

export default App;
