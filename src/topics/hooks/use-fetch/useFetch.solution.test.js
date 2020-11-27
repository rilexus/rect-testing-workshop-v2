import {useFetch} from "./useFetch";
import { renderHook } from '@testing-library/react-hooks'
import {END_POINTS, mockedServerResponse} from "./utils";

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockImplementation(async (url, options) => {
    return mockedServerResponse(url, options)
  })
})
afterEach(() => {
  jest.restoreAllMocks();
})

describe('useFetch', () => {
  it.skip('should return', async function () {
    const { waitForNextUpdate, rerender, ...res } = renderHook(
      (initProps) => useFetch(...initProps), {initialProps: [END_POINTS.GET_USERS, {methode:'GET'}]}
      )
    await waitForNextUpdate() // https://react-hooks-testing-library.com/usage/advanced-hooks
    rerender()
    expect(fetch).toBeCalledTimes(1)
    expect(res.result.current.response.users).toStrictEqual([{name: 'andreas'}, {name: 'mischke'}])
  });
})