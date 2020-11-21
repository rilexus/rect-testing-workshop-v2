import React from 'react';

const Input = ({ id, type = 'text', value, onChange = () => {}, onFocus = () => {}}) => {
  return <input id={id} type={type} value={value} onChange={onChange} onFocus={onFocus}/>
};

export {Input};