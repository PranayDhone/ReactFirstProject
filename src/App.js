import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge, uCollegename) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        {
          name: uName,
          age: uAge,
          collegeName: uCollegename,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={userList}></UsersList>
    </React.Fragment>
  );
}

export default App;
