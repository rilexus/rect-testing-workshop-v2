import React, { useState } from "react";
import { act, render } from "@testing-library/react";
import user from "@testing-library/user-event";

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

const resolvedValue = (value) => new Promise((res) => res(value));

const mockResolvedValueOnce = (value) => {
  return () => resolvedValue(value);
};

describe("Resolve Promise", () => {
  it("should show user name list with Promise", async function () {
    // const mockedGetUser = (value) => new Promise((res) => res(value));
    const mockedGetUser = mockResolvedValueOnce([{ name: "stan" }]);

    const { queryByRole, queryByText } = render(
      <Users getUsers={mockedGetUser} id={"id"} />
    );

    const button = queryByRole("button");
    await act(async () => user.click(button));

    expect(queryByText("stan")).toContainHTML("stan");
  });
});

describe("Resolve mocked Promise", () => {
  it("should show user name list with mocked Promise", async function () {
    const mockedGetUser = jest.fn().mockResolvedValueOnce([{ name: "stan" }]);

    const { queryByRole, queryByText } = render(
      <Users getUsers={mockedGetUser} id={"id"} />
    );

    const button = queryByRole("button");
    await act(async () => user.click(button));

    expect(queryByText("stan")).toContainHTML("stan");
  });
});
