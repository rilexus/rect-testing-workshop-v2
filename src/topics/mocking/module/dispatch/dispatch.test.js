import {dispatchActions} from "./dispatch";

jest.mock('./fetch/fetch')


const sleep = (time) => new Promise((res) => setTimeout(res,time))

describe('Dispatch Fetch', () => {
  it.skip('should call all action types', async function () {
    // mockedFetch.mockResolvedValue('some')

    const dispatch = jest.fn()
    dispatchActions(dispatch)
    await sleep(200)

    expect(dispatch).toHaveBeenCalledWith({"payload": "some", "type": "FINISH"})
  });
})