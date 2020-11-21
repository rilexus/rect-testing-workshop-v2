import ReactDOM from "react-dom";
import React from "react";
import {Input} from "../../../componetns/input/Input";

describe('Input', () => {

  it('should have passed id', function () {
    const htmlDivElement = document.createElement('div')
    ReactDOM.render(<Input id={'Some'} value={'Some'} type={'text'} onChange={() => {}} />, htmlDivElement)
    expect(htmlDivElement.querySelector('input').id).toBe('Some')
  });

  it('should have the passed type', function () {
    const htmlDivElement = document.createElement('div')
    ReactDOM.render(<Input id={'Some'} type={'text'} value={'Some'} onChange={() => {}} />, htmlDivElement)
    expect(htmlDivElement.querySelector('input')).toHaveAttribute('type', 'text')
  });

})