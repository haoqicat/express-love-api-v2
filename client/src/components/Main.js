import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import NewPost from './NewPost'

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/post/new" component={NewPost} />
  </Switch>
)
