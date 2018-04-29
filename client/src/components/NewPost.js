import React, { Component } from 'react'
import axios from 'axios'
import { API_SERVER } from '../constants/ApiConstants'
import Form from './Form'

class NewPost extends Component {
  newPost = async data => {
    await axios.post(`${API_SERVER}/post`, data)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <Form submit={this.newPost} />
      </div>
    )
  }
}

export default NewPost
