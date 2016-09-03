import React from 'react'

import Samples from './Samples'
import styles from './App.scss'

const App = () => (
  <div className={styles.app}>
    <h1>hoc-react-animate</h1>
    <div className={styles.description}>
      hoc-react-animate is an high order component used to animate React component.<br />
      As a high order component, this is usefull because it let your graphical components dumbs.<br />
      It means you can keep your graphical components as pure functions.<br />
    </div>

    <div className={styles.description}>
      You can play with some examples just below.<br />
      Click on sample button to see what happens !<br />
      You can also click on the sample code line to see the full component.<br />
    </div>

    <Samples className={styles.app} />
  </div>
)

export default App
