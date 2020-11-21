import {setNativeValue} from "../../utils";

const CHANGE = 'change'
const CLICK = 'click'

const fireEvent = (eventType, element, options ) => {
  const event = new Event(eventType, {bubbles: true});
  if (eventType === CHANGE){
    setNativeValue(element, options.target.value)
  }
  element.dispatchEvent(event)
}


fireEvent[CHANGE] = (element, options) => fireEvent(CHANGE, element, options)
fireEvent[CLICK] = (element, options) => fireEvent(CLICK, element, options)

export { fireEvent }