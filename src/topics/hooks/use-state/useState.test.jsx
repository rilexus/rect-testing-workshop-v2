import React, { useState } from "react";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";

function renderHook(useHook) {
  const result = {};

  function Component() {
    const current = useHook();
    Object.assign(result, { current });
    return null;
  }
  act(() => {
    render(<Component />);
  });

  return result;
}

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
