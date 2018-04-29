import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default () => (
  <Wrap>
    <Link className="button" to="/post/new">
      写文章
    </Link>
    Home
  </Wrap>
)

const Wrap = styled.div`
  .button {
    display: block;
    margin: 30px auto;
    width: 120px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    background-color: #ff4081;
    font-size: 1em;
    color: #fff;
    text-decoration: none;
    border-radius: 20px;
  }
`