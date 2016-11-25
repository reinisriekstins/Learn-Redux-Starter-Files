import React, { Component, cloneElement } from 'react'
import { Link } from 'react-router'

const Main = props => {
  const { children } = props
  return (
    <div>
      <h1><Link to="/">Yoyostagram</Link></h1>
      { cloneElement(children, props) }
    </div>
  )
}

export default Main