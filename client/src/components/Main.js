import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import NewPost from './NewPost'
import Post from './Post'

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/post/new" component={NewPost} />
    <Route path="/post/:id" component={Post} />
  </Switch>
)
