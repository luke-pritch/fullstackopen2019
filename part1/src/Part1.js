import React, { Component } from "react";

const Hello = props => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  };
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old.
      </p>
      <p>You were probably born in {bornYear()}</p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;

  return (
    <div>
      <h1>
        <Hello name="Maya" age={26 + 10} />
        <Hello name={name} age={age} />
      </h1>
    </div>
  );
};
