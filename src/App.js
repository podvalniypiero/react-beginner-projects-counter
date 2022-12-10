
import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import { Collection } from './Collection';
import './index.scss';



function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [collections, setCollections] = React.useState([]);
  

  React.useEffect(() => {
    // fetch('https://63760f70b5f0e1eb85017e9f.mockapi.io/collections')
    // .then((res) => res.json())
    // .then((json) => {
    //   setCollections(json); 
      
    // })

    // .catch((err) => {
    //   console.warn(err);
    //   alert('Error! No data response from server...');
    // });
    async function fetchData () {
    const itemsResponse =  await axios.get(`https://63760f70b5f0e1eb85017e9f.mockapi.io/collections`);

    setCollections(itemsResponse.data);

    }
      fetchData();

  },[]);

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          <li className="active">Все</li>
          <li>Горы</li>
          <li>Море</li>
          <li>Архитектура</li>
          <li>Города</li>
        </ul>
        <input value={searchValue} onChange={e => setSearchValue(e.target.value)} 
        className="search-input" placeholder="Поиск по названию" />
      </div>
      <div className="content">

        {collections.filter((obj) =>{
          return obj.name.toLowerCase().includes(searchValue.toLocaleLowerCase());  
        })
        .map((obj, index) => (
         <Collection key={index} name = {obj.name} images = {obj.photos} />
        ))
        }
        
      </div>
      <ul className="pagination">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default App;