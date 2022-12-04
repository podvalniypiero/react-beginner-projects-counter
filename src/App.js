import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  const [valute,setValute] = React.useState({});

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
      <Block value={0} currency="RUB" onChangeCurrency={(cur) => console.log(cur)} />
      <Block value={0} currency="USD" />
    </div>
  );
}

export default App;
