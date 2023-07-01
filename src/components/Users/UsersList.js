import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";
const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={"g1"}>
            {user.name}({user.age}years old {user.collegeName})
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
