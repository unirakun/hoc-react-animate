import reducer, { initState } from './list'

import {
  SET_LIST, setList,
} from '../../actions'

/* eslint-env mocha */

describe('list reducers', () => {
  it('should initialize', () => {
    const state = reducer()
    state.should.be.deep.equals(initState)
  })

  describe(`${SET_LIST} action`, () => {
    it('should set a new list', () => {
      const state = reducer(initState, setList([{ id: 1 }, { id: 2 }]))
      state.should.be.deep.equals([{ id: 1 }, { id: 2 }])
    })
  })
})
