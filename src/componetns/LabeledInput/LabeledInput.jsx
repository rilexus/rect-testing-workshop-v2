import React from 'react';
import {Input} from "../input/Input";

const LabeledInput = ({onChange = () => {}, onFocus = () => {}, label, id, value}) => {
  return <div>
    <label htmlFor={id}>{label}</label>
    <Input id={id} onChange={onChange} type={'text'} value={value} onFocus={onFocus}/>;
  </div>
};

export {LabeledInput};