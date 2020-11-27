const END_POINTS = {
  GET_USERS: 'users/get'
}

class MockedUserAPI {
  static getUsers(options){
    return {
      json: async () => ({users: [{name: 'andreas'}, {name: 'mischke'}]}),
      options,
      ok: true,
      status: 200
    }
  }
}

const router = (url, options) => {
  switch (url){
    case END_POINTS.GET_USERS:{
      return MockedUserAPI.getUsers(options)
    }
    default: {
      return {}
    }
  }
}

const mockedServerResponse = async (url, options) => {
  return router(url, options)
}
export { mockedServerResponse, END_POINTS }
