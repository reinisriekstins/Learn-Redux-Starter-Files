import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

// root reducer
import rootReducer from './reducers/index'

// comments
import comments from './data/comments'
import posts from './data/posts'

// create an object for the default data
const defaultState = {
  posts,
  comments
}

export const store = createStore(rootReducer, defaultState)

export const history = syncHistoryWithStore(browserHistory, store)