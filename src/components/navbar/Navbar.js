import React from 'react'
import "./Navbar.css"

const navbar = () => {
  return (
    <nav>
    <a href="/">Reciept</a>
    <a href="/about">About</a>
    <a href="/github">Github</a>
    <a href="/logout">Logout</a>
  </nav>
  )
}

export default navbar