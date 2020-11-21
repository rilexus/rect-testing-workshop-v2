const getByTestId = (element, testId) => {
  return element.querySelector(`[data-testid="${testId}"]`)
}

export { getByTestId }