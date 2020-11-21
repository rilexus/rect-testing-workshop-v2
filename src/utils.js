function getElementsValueSetter(element) {

  const {set: elementsOwnValueSetter } = Object.getOwnPropertyDescriptor(element, 'value') || {}

  const prototype = Object.getPrototypeOf(element)
  // get elements value setter from the elements prototype
  const {set: prototypeValueSetter} = Object.getOwnPropertyDescriptor(prototype, 'value') || {}

  // prioritise the values setter on the prototype
  if (prototypeValueSetter && elementsOwnValueSetter !== prototypeValueSetter) {
    // set value with prototype value setter
    return (value) => prototypeValueSetter.call(element, value)
  }
  else if (elementsOwnValueSetter) {
    // set value with elements own value setter
    return (value) => elementsOwnValueSetter.call(element, value)
  } else {
    throw new Error('The given element does not have a value setter')
  }

}

// function written after some investigation here:
// https://github.com/facebook/react/issues/10135#issuecomment-401496776
function setNativeValue(element, value) {
  const setValue = getElementsValueSetter(element)

  setValue(value)
}

const sleep = time => new Promise(res => setTimeout(res, time))

const getUsers = async () => {
  return [{name: 'stan'}, {name: 'jung-dreas'}, {name: 'markus'}]
}

export { setNativeValue, sleep, getUsers }
