import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  const [fromCurrency, setFromCurrency] = React.useState('RUB');
  const [toCurrency, setToCurrency] = React.useState('USD');
  const [Valute,setValute] = React.useState({});

  React.useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(res => res.json())
    .then((json)=> {
      setValute(json.Valute);
      console.log(json.Valute);

    })
    .catch(err => {
      console.log(err);
      alert('Error! No data from server...')
    })
  },[])

  return (
    <div className="App">
      <Block value={0} currency={fromCurrency} onChangeCurrency={setFromCurrency} />
      <Block value={0} currency={toCurrency} onChangeCurrency={setToCurrency} />
      
    </div>
  );
}

export default App;
