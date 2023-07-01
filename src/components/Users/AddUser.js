import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();
  //USESTATE() HUM individual value ko track karne ke liye karte hai
  // const [enteredUserName, setenteredUserName] = useState("");
  // const [enteredUserAge, setenteredUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enterName = nameInputRef.current.value;
    const enterAge = ageInputRef.current.value;
    const enterCollegeName = collegeInputRef.current.value;

    //line 14to26 validation purpose checking
    if (enterName.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enterAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }
    props.onAddUser(enterName, enterAge, enterCollegeName);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    collegeInputRef.current.value = "";

    // setenteredUserName("");
    // setenteredUserAge("");
  };
  // const usernameChangeHandler = (event) => {
  //   setenteredUserName(event.target.value);
  // };
  // const userAgeChangeHandler = (event) => {
  //   setenteredUserAge(event.target.value);
  // };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUserName}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age(Year)</label>
          <input
            id="age"
            type="number"
            // value={enteredUserAge}
            // onChange={userAgeChangeHandler}
            ref={ageInputRef}
          ></input>
          <label htmlFor="College Name">College Name</label>
          <input id="college-name" type="text" ref={collegeInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
