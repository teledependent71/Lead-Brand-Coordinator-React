import React from 'react'

import PropTypes from 'prop-types'

import './eloisa.css'

const Eloisa = (props) => {
  return (
    <div className="eloisa-container">
      <span className="test-css-class">{props.text}</span>
    </div>
  )
}

Eloisa.defaultProps = {
  text: 'Text',
}

Eloisa.propTypes = {
  text: PropTypes.string,
}

export default Eloisa
