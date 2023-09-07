import ItemDetail from "./ItemDetail"
import { useState, useEffect } from 'react'
import "../main.css"

const ItemDetailContainer = () => {

/* Fetching CLASE7 */
const getProducts = async () => {
    // const response = await fetch("https://fakestoreapi.com/products")
    const response = await fetch('../stock.json')
    const data = await response.json()
    
    return data
}

const [product, setProduct] = useState([])

useEffect(()=> {
    getProducts().then((product)=> setProduct(product))
}, [])
/* Fetching */

console.log(product)

    return (
        <div className="item-detail-container">
            <ItemDetail producto={product} />
        </div>
        
    )
}

export default ItemDetailContainer

