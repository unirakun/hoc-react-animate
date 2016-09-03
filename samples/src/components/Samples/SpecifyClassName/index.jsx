import React, { PropTypes } from 'react'
import animate from 'hoc-react-animate'

import styles from '../animate.scss'
import customStyles from './SpecifyClassName.scss'

const SpecifyClassName = ({ ex, className }) => (
  <div className={`${styles.component} ${className}`}>
    {"I'm animate when my "}<pre>ex</pre>{" prop is changed."}
    <br />
    {"My CSS animation class name is customized."}
    <br />
    <br />
    <pre>ex = {ex}</pre>
  </div>
)

SpecifyClassName.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  ex: PropTypes.string.isRequired,
}

export default animate(
  SpecifyClassName,
  { watchedProps: ['ex'], className: 'custom' }
)
