import React from 'react';
import './index.scss';
import { Success } from './Components/Success';
import { Users } from './Components/Users';

// link with list of users json file: https://reqres.in/api/users

function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading,setLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');
  const [invites,setInvites] = React.useState([]);

  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then (res => res.json())
    .then(json =>{
      setUsers(json.data);
    })
    .catch( err => {
      console.warn(err);
      alert('Error, no data got from server!');
    }).finally(() => setLoading(false));
    }, []); 

    const onChangeSearchValue = (event) => {
      setSearchValue(event.target.value);
    }
  return (
    <div className="App">
      <Users onChangeSearchValue={onChangeSearchValue} searchValue={searchValue} items={users} isLoading={isLoading} />
      {/* <Success /> */}
    </div>
  );
}

export default App;