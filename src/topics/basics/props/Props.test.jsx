import ReactDOM from "react-dom";
import React from "react";

const Props = ({ children, render}) => {
  return render ? children : null
}

describe('Props', () => {
  it('should render props', function () {
    const htmlDivElement = document.createElement('div')

    ReactDOM.render(<Props render={true}>Some</Props>, htmlDivElement)
    expect(htmlDivElement).toContainHTML('Some')

    // rerender
    ReactDOM.render(<Props render={false}>Some</Props>, htmlDivElement)
    expect(htmlDivElement).toContainHTML('')

  });
})