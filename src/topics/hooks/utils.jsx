import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import React from "react";

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

export { renderHook };
