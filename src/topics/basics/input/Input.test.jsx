import React from "react";
import {Input} from "../../../componetns/input/Input";
import ReactDOM from "react-dom";

describe('Input', () => {
  it('should have passed value', function () {
    const htmlDivElement = document.createElement('div')
    ReactDOM.render(<Input value={'Some'} type={'text'} onChange={() => {}} />, htmlDivElement)
    expect(htmlDivElement.querySelector('input').value).toBe('Some')
  });

  it.skip('should have the specified type', function () {});
  it.skip('should have the specified id', function () {});
})