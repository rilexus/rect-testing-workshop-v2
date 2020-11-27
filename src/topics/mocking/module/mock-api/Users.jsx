import * as api from "../../../../utils";
import React, { useState } from "react";

const Users = ({ id /* getUsers = api.getUsers */ }) => {
  const [users, setUsers] = useState([]);

  const handleClick = () => {
    api.getUsers().then((users) => setUsers(users));
  };

  return (
    <div>
      <ul data-testid={id} role={"list"}>
        {users.map(({ name }) => {
          return (
            <li role={"listitem"} key={name}>
              {name}
            </li>
          );
        })}
      </ul>
      <button onClick={handleClick}>click</button>
    </div>
  );
};
export { Users };
