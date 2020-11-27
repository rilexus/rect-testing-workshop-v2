import React, { useEffect, useState } from "react";
import { act, render } from "@testing-library/react";
import { sleep } from "../../../../../utils";
import { asyncRender } from "./utils";
import { Users } from "./Users";

const getUsers = async () => {
  return [{ name: "stan" }, { name: "bogdan" }, { name: "markus" }];
};

describe("User Component", () => {
  it("should show user names on mount", async function () {});
});
