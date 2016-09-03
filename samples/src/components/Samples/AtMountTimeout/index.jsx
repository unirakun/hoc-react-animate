import React, { PropTypes } from 'react'
import animate from 'hoc-react-animate'

import styles from '../animate.scss'

const AtMount = ({ ex, className }) => (
  <div className={`${styles.component} ${className}`}>
    {"I'm animated at mount."}
    <br />
    {"With custom timeout."}
    <br />
    <br />
    <pre>ex = {ex}</pre>
  </div>
)

AtMount.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  ex: PropTypes.string.isRequired,
}

export default animate(AtMount, { atMount: true, timeout: 10 })
