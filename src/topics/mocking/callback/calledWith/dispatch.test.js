import {dispatchActions} from "./dispatch";

describe('Mocking functions', () => {
  it('should call dispatch with action type START', function () {
    const mockedDispatch = jest.fn()

    dispatchActions(mockedDispatch)

    expect(mockedDispatch).toHaveBeenCalledWith({type: 'START'})
  });

  it('should call dispatch with action type FINISH', function () {
    const mockedDispatch = jest.fn()

    dispatchActions(mockedDispatch)

    expect(mockedDispatch).toHaveBeenCalledWith({type: 'FINISH'})
  });

  it('should call dispatch with type ERROR', function () {
    const mockedDispatch = jest.fn()

    dispatchActions(mockedDispatch, 1)

    expect(mockedDispatch).toHaveBeenCalledWith({type: 'ERROR'})
  });

})