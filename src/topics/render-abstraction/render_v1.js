import ReactDOM from "react-dom";
import React from "react";

const render = (ui, options) => {
  const container = document.createElement('div')
  ReactDOM.render(ui, container)
  return {
    container: container
  }
}

export { render }
