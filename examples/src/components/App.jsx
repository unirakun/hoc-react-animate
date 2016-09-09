import React from 'react'

import Examples from './Examples'
import styles from './App.scss'
import Icon from 'favicon.gif'

const App = () => (
  <div className={styles.app}>
    <img className={styles.icon} src={Icon} role="presentation" />

    <h1>
      hoc-react-animate
    </h1>

    <div className={styles.github}>
      <a
        className="github-button"
        href="https://github.com/zenika/react-animate"
        data-style="mega"
        data-count-href="/zenika/react-animate/stargazers"
        data-count-api="/repos/zenika/react-animate#stargazers_count"
        data-count-aria-label="# stargazers on GitHub"
        aria-label="Star zenika/react-animate on GitHub"
      >
        Star it on github
      </a>
    </div>

    <p className={styles.description}>
      hoc-react-animate is an higher order component to animate React component. It lets you write animated components 
      as pure functions.
    </p>

    <p className={styles.description}>
      Check out the examples below. Use the button to trigger animations or click the code to read the full source.
    </p>

    <Examples className={styles.app} />
  </div>
)

export default App
