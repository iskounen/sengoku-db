import React from 'react'
import ReactDOM from 'react-dom'

const HomeIndex = () => (
  <div>
    <h1>Home</h1>
    <h2>Index</h2>
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HomeIndex />,
    document.body.appendChild(document.createElement('div')),
  )
})