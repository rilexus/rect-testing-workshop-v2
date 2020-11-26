import React, { useState } from "react";
import { act } from "react-dom/test-utils";
import { renderHook } from "./utils";

describe("Use State", () => {
  it("should change state", function () {
    // NOTE: DO NOT DESTRUCTURE!
    // const {current: [value, setValue]} = renderHook...
    const stateHook = renderHook(() => useState(42));

    expect(stateHook.current[0] /* [value, setValue] */).toBe(42);

    act(() => {
      /* [value, setValue] */
      stateHook.current[1](41);
    });

    /* [value, setValue] */
    expect(stateHook.current[0]).toBe(41);
  });
});
