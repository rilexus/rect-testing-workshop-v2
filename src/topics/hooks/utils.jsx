import { render } from "@testing-library/react";
import React from "react";

function renderHook(useHook) {
  const result = {};

  function Component() {
    const current = useHook();
    Object.assign(result, { current });
    return null;
  }

  render(<Component />);

  return result;
}

export { renderHook };
