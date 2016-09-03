# hoc-react-animate
## try it
You can try some samples [by clicking here](https://react-animate.firebaseapp.com/).

## what
This is a high order component (`HOC`).

This HOC purpose is to add a CSS className whenever a props change or at mount (or both) to animate it.

## install
`npm i --save hoc-react-animate`

## use
You have to wrap your component, and give some informations :

Parameter | Needed | Default value | Description
----------|--------|---------------|-------------
`watchedProps` | no | `[]` | The props to watch (they are compared with `lodash/isEqual`)
`timeout` | no | `1000` | The time (in ms) the CSS class will be passed to the wrapped component
`className` | no | `'animate'` | This is the className that is added whenever a props change (or at mount)
`atMount` | no | `false` | Set to `true` if you wanna animate the component at mount

The animation last 200ms, so the `loader`/`timeout` parameter is set to last 200ms as well.

**Component.js**
```(javascript)
import React, { PropTypes } from 'react'
import animate from 'hoc-react-animate'

const Component = ({ className, text }) => {
  return (
    <div
      className={`component ${className}`}
    >
      {text}
    </div>
  )
}

Component.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
}

export default animate(
  Component,
  {
    watchedProps: ['text'],
    timeout: 200,
  }
)
```

**css**
```(css)
.component {
  transition: all .2s;
}
.component.animate {
  transform: scale(2);
}
```
