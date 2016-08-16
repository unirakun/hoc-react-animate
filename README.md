# hoc-react-animate
## what
This is a high order component (`HOC`).

This HOC purpose is to add a CSS className whenever a props change or at mount (or both).

## install
`npm i --save hoc-react-animate`

## use
You have to wrap your component, and give some informations :


| Parameter | Needed | Default value | Description
|-
| `watchedProps` | **YES** | N/A | The props to watch (they are compared with `lodash/isEqual`)
| `timeout` | **YES** | N/A | The time the CSS class will be passed to the wrapped component
| `className` | no | `'animate'` | This is the className that is added whenever a props change (or at mount)
| `animateAtMount` | no | `false` | Set to `true` if you wanna animate the component at mount

Example with `redux` where a text change every 3s.

The animation last 1s, so the `loader`/`timeout` parameter is set to last 1s as well.

**Component.js**
```(javascript)
import React from 'react'
export default ({ className, text }) => {
  return (
    <div
      className={`component ${className}`}
    >
      {text}
    </div>
  )
}
```

**Container.js**
```(javascript)
import { connect } from 'react-redux'
import animate from 'hoc-react-animate'
import { fetchText } from '%%your_actions%%'
import Component from './Component'

const mapStateToProps = ({ text }) => {
  return {
    text,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load: (text) => dispatch(setText()),
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  setTimeout(
    () => dispatchProps.load(`${stateProps.text}a`),
    2000
  )

  return {
    stateProps,
    dispatchProps,
    ownProps,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(animate(Component, ['text'], 1000))
```
**css**
```(css)
.component {
  transition: all 1s;
}
.component.animate {
  transform: scale(2);
}
```
