import React, { PropTypes, Component } from 'react'

import Code from 'Code'
import styles from './Sample.scss'

const words = ['Banana', 'House', 'Train', 'Dog', 'Cat', 'River']
const BASE_URL = 'https://github.com/Zenika/react-animate/blob/master/samples/src/components/Samples/'

class Sample extends Component {
  constructor() {
    super()

    this.state = {
      ex: 'Hi',
    }
  }

  onClick = () => {
    const index = Math.round((Math.random() * 10) % (words.length - 1))

    this.setState({
      ex: words[index],
    })
  }

  render() {
    const { style, className, code, children, link } = this.props

    return (
      <div style={style} className={`${styles.sample} ${className}`}>
        <button onClick={this.onClick}>Change prop</button>
        <a href={`${BASE_URL}${link}`}><Code>{code}</Code></a>
        {React.cloneElement(children, {ex: this.state.ex})}
      </div>
    )
  }
}

Sample.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  code: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Sample
