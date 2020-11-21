import React, { useEffect, useState } from "react";
import { act, render } from "@testing-library/react";
import { sleep } from "../../../../../utils";

const getUsers = async () => {
  return [{ name: "stan" }, { name: "bogdan" }, { name: "markus" }];
};

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

describe("Resolve", () => {
  it("should show user name list", async function () {
    let component = null;
    await act(async () => {
      component = render(<Users getUsers={getUsers} id={"id"} />);
    });
    const { queryByText } = component;
    const stan = queryByText("stan");
    expect(stan).toContainHTML("stan");
  });
});
