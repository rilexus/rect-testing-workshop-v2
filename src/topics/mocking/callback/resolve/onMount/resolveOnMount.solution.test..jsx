import React, { useEffect, useState } from "react";
import { act, render } from "@testing-library/react";
import { sleep } from "../../../../../utils";
import { asyncRender } from "./utils";
import { Users } from "./Users";

const getUsers = async () => {
  return [{ name: "stan" }, { name: "bogdan" }, { name: "markus" }];
};

describe("Resolve", () => {
  it("should show user name list", async function () {
    let component = null;

    await act(async () => {
      component = render(<Users getUsers={getUsers} id={"id"} />);
    });

    const { queryByText } = component;
    const stan = queryByText("stan");

    // const rendered = await asyncRender(<Users getUsers={getUsers} id={"id"} />);
    // const { queryByText } = rendered.current;
    // const stan = queryByText("stan");

    expect(stan).toContainHTML("stan");
  });
});
