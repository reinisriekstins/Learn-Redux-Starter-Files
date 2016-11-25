// vendor
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

// css
import css from './styles/style.styl'

// components
import Main from './components/Main'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'
import App from './components/App'

// store
import { store, history } from './store'

render(
<Provider store={ store }>
  <Router history={ history }>
    <Route path="/" component={ App }>
      <IndexRoute component={ PhotoGrid }></IndexRoute>
      <Route path="/view/:postId" component={ Single }></Route>
    </Route>
  </Router>
</Provider>, 
document.querySelector('#root'))

