const getByLabelText = (element, text) => {
  const labels = Array.from(element.querySelectorAll('label'))
  let input
  for (let {innerHTML, htmlFor} of labels){
    if (innerHTML === text){
      input = element.querySelector(`#${htmlFor}`)
    }
  }
  return input
}

export { getByLabelText }