import React from "react";
import { act, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { getUsers as mockedGetUsers } from "../../../../utils";
import { Users } from "./Users";

jest.mock("../../../../utils");

describe("Resolve Promise", () => {
  it("should show user name list with Promise", async function () {
    mockedGetUsers.mockResolvedValueOnce([{ name: "peter" }]);
    const { queryByRole } = render(<Users id={"id"} />);

    const button = queryByRole("button");
    await act(async () => user.click(button));
    expect(queryByRole("list")).toContainHTML("peter");
  });
});
