import ReactDOM from "react-dom";
import {Wrapper} from "../../componetns/wrapper/Wrapper";
import React from "react";

describe('Data test id', () => {
  it.skip('should get by test id', function () {
    const htmlDivElement = document.createElement('div')
    ReactDOM.render(<Wrapper testid={'testid'}>Some</Wrapper>, htmlDivElement)

    // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    expect({} /* add a selector by the data-testid */).toBeDefined()
    // create a helper
  });
})