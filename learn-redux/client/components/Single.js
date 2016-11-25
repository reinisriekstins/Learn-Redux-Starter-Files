import React, { Component } from 'react'
import { Link } from 'react-router'

import Photo from './Photo'
import Comments from './Comments'

const Single = props => {
  const { posts, params, comments } = props

  const i = posts.findIndex(post => post.code === params.postId )
  const post = posts[i]
  const postComments = comments[params.postId] || []

  return (
    <div className="single-photo">
      <Photo i={ i } post={ post } { ...props } />
      <Comments postComments={ postComments } { ...props } />
    </div>
  )
}

export default Single