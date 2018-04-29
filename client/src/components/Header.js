import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default () => (
  <Wrap>
    <Link to="/">Born To Code</Link>
  </Wrap>
)

const Wrap = styled.div`
  background-color: #00bcd4;
  line-height: 64px;
  text-align: center;

  a {
    text-decoration: none;
    color: white;
  }
`
