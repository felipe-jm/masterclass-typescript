import React, { useState, useEffect } from 'react';

import api from './services/api';

import User from './components/User';

interface IUser {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    async function loadUsers(){
      try{
        const response = await api.get<IUser[]>('users');

        setUsers(response.data);
      }catch(err){
        console.log(err);
      }
    }

    loadUsers();
  }, []);

  return (
    <div>
      {users.map(user => (
        <User key={user.email} user={user} />
      ))}
    </div>
  );
}

export default App;
