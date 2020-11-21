import {LabeledInput as Labeled} from "../../../componetns/LabeledInput/LabeledInput";
import React, {useState} from "react";
import {EVENT_COMPONENT_LABEL} from "./LabeledInput.enum";

const LabeledInput = () => {
  const [value, setValue] = useState('')

  const handleChange = e => {
    const {value: v} = e.target
    setValue(v)
  }
  const handleFocus = () => {
    throw new Error('BAAAAAM! onFocus ERROR')
  }

  return <Labeled onFocus={handleFocus} value={value} type={'text'} onChange={handleChange} label={EVENT_COMPONENT_LABEL} id={'id'}/>
}
export { LabeledInput }