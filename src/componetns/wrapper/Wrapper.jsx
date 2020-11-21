import React from 'react';

const Wrapper = ({children, testid = ''}) => {
  return (
    <div data-testid={testid}>
      {children}
    </div>
  );
};

export {Wrapper};