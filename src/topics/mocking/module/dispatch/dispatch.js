import {fetch} from "./fetch/fetch";

const dispatchActions = (dispatch, value) => {
  const start = () => dispatch({type:'START'})
  const finish = value => dispatch({type:'FINISH', payload: value})
  const error = e => dispatch({type:'ERROR', payload: e})

  start()

  fetch().then(finish).catch(error)

}

export { dispatchActions }