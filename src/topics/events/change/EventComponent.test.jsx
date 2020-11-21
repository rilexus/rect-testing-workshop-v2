import ReactDOM from "react-dom";
import {Input} from "../../../componetns/input/Input";
import React, {useState} from "react";

const EventComponent = () => {
  const [value, setValue] = useState('val')

  const handleChange = e => {
    const {value} = e.target
    setValue(value)
  }

  return <Input value={value} type={'text'} onChange={handleChange} />
}

describe('Input change event', () => {
  it('should handle change event', function () {

    const htmlDivElement = document.createElement('div')
    ReactDOM.render(<EventComponent />, htmlDivElement)
    const input = htmlDivElement.querySelector('input')

    const changeValue = 'input value has changed to this'

    const event = new Event('change', {bubbles: true});
    input.value = changeValue
    input.dispatchEvent(event)

    expect(input.value).toBe(changeValue)

  });
})