import React from 'react'
import { injectGlobal } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'
import Main from './Main'

injectGlobal`
  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`

export default () => (
  <Router>
    <div>
      <Header />
      <Main />
    </div>
  </Router>
)
