import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const Products = () => {

    const listofproducts = {
        productArray: [
            { id: 1, message: "Product1" },
            { id: 2, message: "Product2" },
            { id: 3, message: "Product3" }
        ]
    }

    const [search, setSearch] = useSearchParams();

const isactive = search.get("filter") === "active"

    return (
        <>
            <ul>
                {listofproducts.productArray.map((elements, index) => (
                    <li key={index}>
                        <Link to={`/products/ProductDetails/:${elements.id}`}>Product number {elements.id} and it includes {elements.message}</Link>
                    </li>
                ))}
            </ul>

         <button onClick={()=> setSearch({filter : "active"})}>Active</button> 
         <button onClick={()=> setSearch({})}>Reset</button>

          { isactive ? <h1>Showing active user</h1> : <h1>Showing all user </h1>}
        </>
    )
}

export default Products