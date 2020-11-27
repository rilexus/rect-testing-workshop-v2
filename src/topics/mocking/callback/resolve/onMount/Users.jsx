import React, { useEffect, useState } from "react";

const Users = ({ getUsers, id }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, []);

  return (
    <ul id={id}>
      {users.map(({ name }) => {
        return <li key={name}>{name}</li>;
      })}
    </ul>
  );
};

export { Users };
