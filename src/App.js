import React from 'react';
import './index.scss';
import { Success } from './Components/Success';
import { Users } from './Components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  return (
    <div className="App">
      <Users />
      {/* <Success /> */}
    </div>
  );
}

export default App;