import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'

export default createStore(
  reducers,
  compose(
    applyMiddleware(thunkMiddleware),
    /* eslint-env browser */
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
