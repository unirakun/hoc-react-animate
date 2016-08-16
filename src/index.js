import React, { Component, PropTypes } from 'react'
import pick from 'lodash/pick'
import isEqual from 'lodash/isEqual'

const getDisplayName = (c) => c.displayName || c.name || 'Component'

export default (
  ComposedComponent,
  watchedProps,
  timeout,
  className = 'animate',
  animateAtMount = false
) => class extends Component {
  static displayName = `Animate(${getDisplayName(ComposedComponent)})`
  static propTypes = {
    className: PropTypes.string,
  }

  state = {
    props: {},
  }

  getClassName = () => {
    return `${this.props.className ? `${this.props.className} ` : ''}${className}`
  }

  animate = (animate, props) => {
    if (animate) {
      this.setState({
        props: pick(props || this.props, watchedProps),
        className: animate ? this.getClassName() : this.props.className,
      })

      setTimeout(() => {
        this.setState({
          className: this.props.className,
        })
      }, timeout)
    }
  }

  componentWillMount() {
    this.animate(animateAtMount)
  }

  componentWillReceiveProps = (nextProps) => {
    const pickedProps = pick(nextProps, watchedProps)
    this.animate(!isEqual(pickedProps, this.state.props), pickedProps)
  }

  render() {
    return <ComposedComponent {...this.props} className={this.state.className} />
  }
}

