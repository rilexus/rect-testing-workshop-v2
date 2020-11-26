import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Input } from "./Input.solution";
import userEvent from "@testing-library/user-event";

describe("Input", () => {
  it("should render correct elements", function () {
    const label = "label_text";
    const id = "input_id";
    const name = "name";
    const { getByLabelText } = render(
      <Input label={label} data-testid={id} name={name} />
    );
    expect(getByLabelText(label)).toBeDefined();
  });

  it("should be found by test-id", function () {
    const label = "label_text";
    const id = "input_id";
    const name = "name";
    const { getByTestId } = render(
      <Input label={label} data-testid={id} name={name} />
    );
    expect(getByTestId(id)).toBeDefined();
  });

  it("should call the on change callback", function () {
    const label = "label_text";
    const name = "name";
    const onChange = jest.fn();
    const id = "input_id";

    const Wrapper = () => {
      const [value, setValue] = useState("");
      const handle = ({ target: { value } }) => {
        setValue(value);
        onChange(value);
      };
      return (
        <Input
          label={label}
          value={value}
          data-testid={id}
          onChange={handle}
          name={name}
        />
      );
    };
    const { getByTestId } = render(<Wrapper />);
    const input = getByTestId(id);
    const changedValue = "some";
    userEvent.type(input, changedValue);

    expect(onChange).toBeCalledWith(changedValue);
  });
});
