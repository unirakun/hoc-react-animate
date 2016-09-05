# hoc-react-animate

## what is this?
This is a higher order component ("HOC") that adds a CSS class to its child component whenever a prop change or at mount (or both) to animate it.

## try it
You can test some examples [here](https://react-animate.firebaseapp.com/).

## install
`npm i --save hoc-react-animate`

## use
You have to wrap your component, and give some informations:

Parameter | Required | Default value | Description
----------|--------|---------------|-------------
`watchedProps` | no | `[]` | The props to watch (they are compared with `lodash.isEqual`)
`timeout` | no | `1000` | The time (in ms) for which the CSS class is applied to the wrapped component
`className` | no | `'animate'` | The class to add when a prop changes (or at mount)
`atMount` | no | `false` | Set to `true` if you want to animate the component at mount

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
