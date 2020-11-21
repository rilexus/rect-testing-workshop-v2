import ReactDOM from "react-dom";

import React from "react";
import {LabeledInput} from "../../componetns/LabeledInput/LabeledInput";

describe('LabeledInput', () => {

  it('should be associated with an input by the label id', function () {
      const htmlDivElement = document.createElement('div')
      ReactDOM.render(<LabeledInput id={'Some'} value={'Some'} type={'text'} onChange={() => {}} />, htmlDivElement)
      expect(htmlDivElement.querySelector('label').htmlFor).toBe(htmlDivElement.querySelector('input').id)
  });

  it.skip('should be associated with an input by the label text', function () {});

})