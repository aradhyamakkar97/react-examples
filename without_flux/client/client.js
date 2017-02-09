import React from 'react'
import { render } from 'react-dom' // es6 equalent of -  var render = require('react-dom').render;
import App from '../components/App'

render(
  <App/>,document.getElementById('app')
)
