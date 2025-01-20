import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <Link to = "/">Home</Link>
        <Link to = "aboutus/:years/:month?">About</Link>
        <Link to = "products">Product</Link>
        {/* <Link>Login</Link> */}
    </div>
  )
}

export default Nav