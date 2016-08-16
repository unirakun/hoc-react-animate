import React, { Component, PropTypes } from 'react'
import pick from 'lodash/pick'
import isEqual from 'lodash/isEqual'

const getDisplayName = (c) => c.displayName || c.name || 'Component'

export default (
  ComposedComponent,
  config,
) => {
  const {
    watchedProps = [],
    timeout = 1000,
    className = 'animate',
    atMount = false,
  } = config || {}

  return class extends Component {
    static displayName = `Animate(${getDisplayName(ComposedComponent)})`
    static propTypes = {
      className: PropTypes.string,
    }

    state = {
      props: {},
    }

    animate = (animate, props) => {
      if (animate) {
        let composedClassName = className
        if (this.props.className) composedClassName = `${composedClassName} ${this.props.className}`

        this.setState({
          props,
          className: composedClassName,
        })

        this.timer = setTimeout(() => this.animate(false, pick(this.props, watchedProps)), timeout)
      } else {
        this.setState({
          props,
          className: this.props.className,
        })
      }
    }

    componentWillMount() {
      this.animate(atMount, pick(this.props, watchedProps))
    }

    componentWillReceiveProps(nextProps) {
      const pickedProps = pick(nextProps, watchedProps)
      this.animate(!isEqual(pickedProps, this.state.props), pickedProps)
    }

    componentWillUnmount() {
      clearTimeout(this.timer)
    }

    render() {
      const newProps = {}
      if (this.state.className) newProps.className = this.state.className

      return <ComposedComponent {...this.props} {...newProps} />
    }
  }
}
