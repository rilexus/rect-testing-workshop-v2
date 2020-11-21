import {Wrapper} from "../../../componetns/wrapper/Wrapper";
import React from "react";
import ReactDOM from 'react-dom';

describe('SimpleRender', () => {

  it('should render children', function () {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element
    const htmlDivElement = document.createElement('div')

    ReactDOM.render(<Wrapper>Some</Wrapper>, htmlDivElement)

    // see: https://github.com/testing-library/jest-dom
    expect(htmlDivElement).toContainHTML('Some')
  });

})