import React from "react";
import { fireEvent } from "../fireEvent";
import user from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { LabeledInput } from "./LabeledInput";
import { EVENT_COMPONENT_LABEL } from "./LabeledInput.enum";

const LABEL_TEXT = EVENT_COMPONENT_LABEL;

describe("Input", () => {
  it("should handle change event", function () {
    // DOES NO LOOK IN TO THE IMPLEMENTATION OF LabeledInput
    const { getByLabelText } = render(<LabeledInput />);

    const input = getByLabelText(LABEL_TEXT);
    const changeValue = "input value has changed to this";

    fireEvent.change(input, { target: { value: changeValue } });

    expect(input.value).toBe(changeValue);
  });

  it.skip('should handle change event with "user-events"', function () {
    // https://github.com/testing-library/user-event#clickelement-eventinit-options
  });
});
