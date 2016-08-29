import { SET_LIST } from '../../actions'

export const initState = []
export const initAction = { type: 'INIT_ACTION' }

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case SET_LIST: return action.list
    default: return state
  }
}
