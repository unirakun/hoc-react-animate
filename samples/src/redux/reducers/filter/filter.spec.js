import reducer, { initState } from './filter'

import {
  setFilter, SET_FILTER,
} from '../../actions'

/* eslint-env mocha */

describe('filter reducers', () => {
  it('should initialize', () => {
    const state = reducer()
    state.should.be.deep.equals(initState)
  })

  describe(`${SET_FILTER} action`, () => {
    it('Should handle a simple modification', () => {
      const state = reducer(undefined, setFilter('12oe'))
      state.should.be.deep.equals('12oe')
    })
  })
})
