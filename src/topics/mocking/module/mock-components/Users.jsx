import React, { useState } from "react";
import { SomeHugeWrapper } from "./SomeHugeWrapper";

const Users = ({ id }) => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    return [{ name: "stan" }];
  };
  const handleClick = () => {
    getUsers().then((users) => setUsers(users));
  };
  return (
    <div data-testid={id}>
      <SomeHugeWrapper>
        <ul>
          {users.map(({ name }) => {
            return <li key={name}>{name}</li>;
          })}
        </ul>
        <button onClick={handleClick}>click</button>
      </SomeHugeWrapper>
    </div>
  );
};
export { Users };
