import ReactDOM from "react-dom";
import {Wrapper} from "../../componetns/wrapper/Wrapper";
import React from "react";
import {getByTestId} from "./get-by-test-id";

describe('Data test id', () => {
  it('should get by test id', function () {

    const htmlDivElement = document.createElement('div')
    const testId = 'some'

    ReactDOM.render(<Wrapper testid={testId}>Some</Wrapper>, htmlDivElement)

    expect(htmlDivElement.querySelector(`[data-testid="${testId}"]`)).toBeDefined()
  });
})