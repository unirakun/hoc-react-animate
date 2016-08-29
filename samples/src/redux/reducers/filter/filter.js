import { SET_FILTER } from '../../actions'

export const initState = ''
export const initAction = { type: 'INIT_ACTION' }

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case SET_FILTER: return action.filter
    default: return state
  }
}
