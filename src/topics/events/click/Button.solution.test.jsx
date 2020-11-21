import {Button} from "../../../componetns/button/Button";
import {render} from "../../render-abstraction/render_v3";
import React from "react";
import {fireEvent} from "../fireEvent";



describe('Button click', () => {

  it('should react to click', function () {
    let clicked = false
    const handleClick = () => {
      clicked = true
    }
    const { getByText } = render(<Button onClick={handleClick}>click me</Button>)
    const button = getByText('click me')

    fireEvent.click(button)

    expect(clicked).toBe(true)

  });
})