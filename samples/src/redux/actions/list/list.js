export const SET_LIST = 'SET_LIST'
export const setList = (list) => ({
  type: SET_LIST,
  list,
})

export const FETCH_LIST = 'FETCH_LIST'
export const fetchList = () => (dispatch) => {
  dispatch({ type: FETCH_LIST }) // debug purpose

  fetch('https://randomuser.me/api?results=100')
    .then(res => res.json())
    .then(res => dispatch(setList(res.results)))
}
