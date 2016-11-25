import React, { Component } from 'react'

class Comments extends Component {
  render() {
    const { postComments, params, addComment, removeComment } = this.props

    const renderComment = (comment, i) => {
      return (
        <div className="comment" key={ i }>
          <p>
            <strong>{ comment.user }</strong>
            { comment.text }
            <button className="remove-comment" onClick={ () => removeComment(params.postId, i) }>
              &times;
            </button>
          </p>
        </div>
      )
    }

    const handleSubmit = e => {
      e.preventDefault()

      const { postId } = params
      const { author, comment, commentForm } = this.refs

      addComment(postId, author.value, comment.value)
      commentForm.reset()
    }

    return (
      <div className="comments">
        { postComments.map(renderComment) }
        <form ref="commentForm" className="comment-form" onSubmit={handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden/>
        </form>
      </div>
    )
  }
}

export default Comments