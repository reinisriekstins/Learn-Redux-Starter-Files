import React, { Component } from 'react'
import { Link } from 'react-router'

import Photo from './Photo'

const PhotoGrid = props => {
  return (
    <div className="photo-grid">
      { props.posts.map((post, i) => <Photo { ...props } key={ i } i={ i } post={ post } />) }
      {/*<pre>
        { JSON.stringify(props.posts, null, ' ') }
      </pre>*/}
    </div>
  )
}

export default PhotoGrid