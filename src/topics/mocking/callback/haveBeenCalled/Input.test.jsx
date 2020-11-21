import {fireEvent, render} from "@testing-library/react";
import {Input} from "../../../../componetns/input/Input";
import React from "react";

describe('Input callback', () => {
  it('should call onChange function', function () {
    const handleChange = jest.fn()

    render(<Input onChange={handleChange} id={'id'}/>)
    const input = document.getElementById('id')

    // use fireEvent from @testing-library/react
    fireEvent.change(input, {target: {value: 'some'}})

    expect(handleChange).toHaveBeenCalled()
  });
})