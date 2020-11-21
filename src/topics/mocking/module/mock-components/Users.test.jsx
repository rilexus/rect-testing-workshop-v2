import { render } from "@testing-library/react";
import React from "react";
import { Users } from "./Users";

jest.mock("./SomeHugeWrapper", () => {
  return {
    SomeHugeWrapper: ({ children }) => <div>{children}</div>,
  };
});

describe("Resolve", () => {
  it("should show user name list", async function () {
    const { queryByTestId } = render(<Users id={"id"} />);
    const comp = queryByTestId("id");

    expect(comp).toBeDefined();
  });
});
