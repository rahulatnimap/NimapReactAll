import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const userId = useParams()
  return (
    <div>
        {/* <h1>Product number {this.props.match.params.id}</h1> */}
        <h1>h1 Products Details {userId.id}</h1> 
        <Link to={"nestedproduct"}>Nested</Link>
        <Outlet/>
    </div>
  )
}

export default ProductDetails