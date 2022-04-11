import React from 'react'
import PropTypes from 'prop-types'

const headerStyle = {
  wrapper:{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  },
  h3:{
    fontSize: '1.7rem',
    fontWeight: '500',
    color:"#ff5000"
  }
}

function Header(props) {
  return (
    <div style={headerStyle.wrapper}>
    <h3 style={headerStyle.h3}>Pokedex</h3>
    </div>
  )
}

Header.propTypes = {}

export default Header
