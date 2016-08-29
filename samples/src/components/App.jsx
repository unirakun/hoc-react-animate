import React from 'react'

import Samples from './Samples'
import styles from './App.scss'

const App = () => (
  <div>
    <h2>Click on code to see all source file.</h2>
    <Samples className={styles.app} />
  </div>
)

export default App
