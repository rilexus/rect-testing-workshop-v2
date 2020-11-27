import {act, render} from "@testing-library/react";

const asyncRender = async (ui) => {
  let renderRes = { current: {} };
  await act(async () => {
    renderRes.current = render(ui);
  });

  return renderRes;
};

export { asyncRender }
