import React, { PropTypes } from 'react'

import Example from 'Example'
import AtMount from './AtMount'
import AtMountTimeout from './AtMountTimeout'
import PropChange from './PropChange'
import SpecifyClassName from './SpecifyClassName'

import styles from './Examples.scss'

const Examples = ({ style, className }) => (
  <div style={style} className={`${styles.examples} ${className}`}>
    <Example
      className={styles.example}
      link="AtMount"
      code="export&nbsp;default animate(AtMount, { atMount: true })"
    >
      <AtMount />
    </Example>

    <Example
      className={styles.example}
      link="AtMountTimeout"
      code="export&nbsp;default animate(AtMount, { atMount: true, timeout: 10 })"
    >
      <AtMountTimeout />
    </Example>

    <Example
      className={styles.example}
      link="PropChange"
      code="export&nbsp;default animate(AtMount, { watchedProps: ['ex'] })"
    >
      <PropChange ex={2} />
    </Example>

    <Example
      className={styles.example}
      link="SpecifyClassName"
      code="export&nbsp;default animate(
        SpecifyClassName,
        { watchedProps: ['ex'], className: 'custom' }
      )"
    >
      <SpecifyClassName />
    </Example>
  </div>
)

Examples.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
}

export default Examples
