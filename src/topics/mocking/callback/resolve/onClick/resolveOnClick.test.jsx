import React, { useState } from "react";
import { act, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { sleep } from "../../../../../utils";

const getUsers = async () => {
  await sleep(100);
  return [{ name: "stan" }, { name: "bogdan" }, { name: "markus" }];
};

const Users = ({ getUsers, id }) => {
  const [users, setUsers] = useState([]);

  const handleClick = () => {
    getUsers().then((users) => setUsers(users));
  };
  return (
    <div>
      <ul id={id}>
        {users.map(({ name }) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

describe("Resolve", () => {
  it.skip("should show user name list", async function () {
    const { queryByRole, queryByText } = render(
      <Users getUsers={async () => {}} id={"id"} />
    );
    //
    const button = queryByRole("button");
    await act(async () => user.click(button));

    expect(queryByText("stan")).toContainHTML("stan");
  });
});
