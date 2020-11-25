import { render } from "@testing-library/react";
import React from "react";
import { Users } from "./Users";
import { SomeHugeWrapper as MockedSomeHugeWrapper } from "./SomeHugeWrapper";

jest.mock("./SomeHugeWrapper");

describe("Resolve", () => {
  beforeEach(() => {
    MockedSomeHugeWrapper.mockImplementation(({ children }) => (
      <div>children</div>
    ));
  });
  it("should show user name list", async function () {
    const { queryByTestId } = render(<Users id={"id"} />);
    const comp = queryByTestId("id");

    expect(comp).toBeDefined();
  });
});
