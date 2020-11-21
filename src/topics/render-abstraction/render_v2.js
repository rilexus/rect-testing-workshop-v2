import ReactDOM from "react-dom";
import React from "react";
import {getByLabelText} from "../get-by-label-text/getByLabelText";

const render = (ui, options) => {
  const container = document.createElement('div')
  ReactDOM.render(ui, container)
  return {
    container: container,
    getByLabelText: (text) => getByLabelText(container, text),
    // add more helper functions
  }
}

export { render }
