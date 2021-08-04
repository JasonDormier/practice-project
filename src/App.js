import React, {useState} from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/UserList/UserList';
import './App.css';

const App = () => {

  const [userData, setUserData] = useState([]);

  const onSaveUserDataHandler = (enteredUserData) => {
    setUserData(prevUserData => {
      return [enteredUserData, ...prevUserData];
    });
  }
  return (
    <div>
        <AddUser onSaveUserData={onSaveUserDataHandler} />
        <UserList savedUserData={userData} />
    </div>
  );
}

export default App;
