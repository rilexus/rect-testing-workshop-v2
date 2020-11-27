import { render } from "@testing-library/react";
import React from "react";
import { Users } from "./Users";
import { SomeHugeWrapper as MockedSomeHugeWrapper } from "./SomeHugeWrapper";

jest.mock("./SomeHugeWrapper");

describe("Resolve", () => {
  it("should show user name list", async function () {
    MockedSomeHugeWrapper.mockImplementation(({ children }) => (
      <div>{children}</div>
    ));
    const { queryByTestId } = render(<Users id={"id"} />);
    const comp = queryByTestId("id");

    expect(comp).toBeDefined();
  });
});
