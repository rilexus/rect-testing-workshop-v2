import React from "react";
import {getQueriesForElement} from "@testing-library/dom";
import ReactDOM from "react-dom";

const render = (ui, options) => {
  const container = document.createElement('div')
  if (options?.Wrapper){
    const {Wrapper} = options
    ReactDOM.render( <Wrapper>{ui}</Wrapper>, container)
  }else {
    ReactDOM.render(ui, container)
  }

  // https://testing-library.com/docs/dom-testing-library/api-queries#queries
  const queries = getQueriesForElement(container)

  return {
    container: container,
    ...queries
  }
}

export { render }
