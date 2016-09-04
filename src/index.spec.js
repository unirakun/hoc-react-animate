import React from 'react'
import { mount } from 'enzyme'
import animate from './index'

/* eslint-env mocha */

const Component = () => <div />
const getWrapped = (config, props) => {
  const Container = animate(Component, config)
  return mount(<Container {...props} />)
}

const getProps = (mounted) => mounted.find(Component).props()
const equals = (mounted, object) => getProps(mounted).should.be.deep.equals(object)

describe('react-animate', () => {
  it('should have the right default parameters', () => {
    const animated = getWrapped()

    equals(animated, {})
  })

  it('should not filter props, animate at mount for 1s', done => {
    const animated = getWrapped({ atMount: true }, { testProps: '1' })

    setTimeout(() => {
      equals(animated, {
        className: 'animate',
        testProps: '1',
      })

      setTimeout(() => {
        equals(animated, {
          testProps: '1',
        })
        done()
      }, 900)
    }, 100)
    equals(animated, {
      className: 'animate',
      testProps: '1',
    })
  })

  it('should not delete animate classname', done => {
    const animated = getWrapped({ atMount: true, timeout: -1 }, { testProps: '1' })

    setTimeout(() => {
      equals(animated, {
        className: 'animate',
        testProps: '1',
      })

      setTimeout(() => {
        equals(animated, {
          className: 'animate',
          testProps: '1',
        })
        done()
      }, 1100)
    }, 100)
    equals(animated, {
      className: 'animate',
      testProps: '1',
    })
  })

  it('should animate at mount for 10ms with custom class', done => {
    const animated = getWrapped({ className: 'test', atMount: true, timeout: 10 })

    setTimeout(() => {
      equals(animated, { })
      done()
    }, 10)

    equals(animated, { className: 'test' })
  })

  it('should merge classNames', done => {
    const animated = getWrapped({ atMount: true, timeout: 10 }, { className: 'test' })

    setTimeout(() => {
      equals(animated, { className: 'test' })
      done()
    }, 10)

    equals(animated, { className: 'animate test' })
  })

  it('should animate on props changing', done => {
    const animated = getWrapped({ timeout: 10, watchedProps: ['test'] }, { test: 'oldValue' })

    equals(animated, {
      test: 'oldValue',
    })

    animated.setProps({ test: 'oldValue', newProp: 'test' })
    equals(animated, {
      test: 'oldValue',
      newProp: 'test',
    })

    animated.setProps({ test: 'newValue', newProp: 'update' })
    setTimeout(() => {
      equals(animated, {
        test: 'newValue',
        newProp: 'update',
      })
      done()
    }, 10)

    equals(animated, {
      className: 'animate',
      test: 'newValue',
      newProp: 'update',
    })
  })

  it('should clear timeout', done => {
    /* eslint-disable no-underscore-dangle */
    const animated = getWrapped({ atMount: true })
    setTimeout(() => {
      animated.node.timer._called.should.be.deep.equals(false)
    }, 10)

    animated.unmount()
    animated.node.timer._called.should.be.deep.equals(false)
    animated.node.timer._idleTimeout.should.be.deep.equals(-1)

    setTimeout(() => {
      animated.node.timer._called.should.be.deep.equals(false)
      done()
    }, 1000)

    /* eslint-enable no-underscore-dangle */
  })
})
