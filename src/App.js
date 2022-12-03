import React from 'react';
import './index.scss';
import { Success } from './Components/Success';
import { Users } from './Components/Users';

// link with list of users json file: https://reqres.in/api/users

function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading,setLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');
  const [success,setSuccess] = React.useState(false);
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

    const onClickInvite = (id) => {
      if (invites.includes(id)){
        setInvites(prev => prev.filter(_id => _id!== id ))
      } else{
        setInvites(prev => [...prev, id]);
      }
    }
    const onClickToSend = () => {
      setSuccess(true);
    }
  return (
    <div className="App">
      {
        success ? (<Success />) : (<Users 
          invites={invites}
           onClickInvite={onClickInvite} 
           onChangeSearchValue={onChangeSearchValue} 
           searchValue={searchValue} 
           items={users} 
           isLoading={isLoading} 
           onClickToSend = {onClickToSend}
           />)
      } 
       
    </div>
  );
}

export default App;