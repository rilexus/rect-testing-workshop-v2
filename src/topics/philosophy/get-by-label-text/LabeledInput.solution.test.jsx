import ReactDOM from "react-dom";
import { LabeledInput } from "../../../componetns/LabeledInput/LabeledInput";
import React from "react";
import { getByLabelText } from "./getByLabelText";

describe("LabeledInput", () => {
  it("should be associated with an input by the label text", function () {
    const htmlDivElement = document.createElement("div");
    ReactDOM.render(
      <LabeledInput
        label={"SomeLabel"}
        id={"Some"}
        value={"Some"}
        type={"text"}
        onChange={() => {}}
      />,
      htmlDivElement
    );

    // https://github.com/testing-library/dom-testing-library
    const input = getByLabelText(htmlDivElement, "SomeLabel");

    // const input = queries.getByLabelText(htmlDivElement, 'SomeLabel')

    // const { getByLabelText } = getQueriesForElement(htmlDivElement)
    // const input = getByLabelText('SomeLabel')

    expect(input).toBeDefined();
  });
});
