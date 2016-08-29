import React, { PropTypes } from 'react'
import animate from 'hoc-react-animate'

import styles from '../animate.scss'

const AtMount = ({ ex, className }) => (
  <div className={`${styles.component} ${className}`}>
    I'm animate at mount.<br />
    With default timeout.<br />
    <pre>ex = {ex}</pre>
  </div>
)

AtMount.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
}

export default animate(AtMount, { atMount: true })
