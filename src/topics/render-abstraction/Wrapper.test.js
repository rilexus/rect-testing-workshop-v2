import {render} from "./render_v1";
import {Wrapper} from "../../componetns/wrapper/Wrapper";
import React from "react";

describe('Wrapper custom render', () => {
  it('should render children', function () {
    const { container } = render(<Wrapper>some</Wrapper>)

    expect(container).toContainHTML('some')
  });
})