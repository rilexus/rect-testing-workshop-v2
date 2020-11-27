const dispatchActions = (dispatch, value) => {
  const start = () => dispatch({type:'START'})
  const finish = () => dispatch({type:'FINISH'})
  const error = () => dispatch({type:'ERROR'})

  start()
  if (value === 1){
    error()
    return
  }

  finish()

}

export { dispatchActions }