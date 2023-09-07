import { useState, useEffect } from 'react'
import ItemList from './ItemListContainerRama/ItemList'
import { useParams } from 'react-router-dom'

/* CLASE 9
import { useParams } from 'react-router-dom'
CLASE 9 */

const ItemListContainer = () => {

/* CLASE6 */
    let product = [
        {
            "id": 1,
            "title": "Teclado Gamer",
            "price": 89.99,
            "description": "Teclado Gamer",
            "category": "Perifericos",
            "img": "{imgTeclado}",
            "icon": "mouse"
            },
        {
            "id": 2,
            "title": "Mouse Gamer",
            "price": 32.99,
            "description": "Mouse Gamer",
            "category": "Perifericos",
            "img": "{imgMouse}",
            "icon": "keyboard"
            },
        {
            "id": 3,
            "title": "PC Gamer",
            "price": 235.99,
            "description": "PC Gamer",
            "category": "PCArmada",
            "img": "{imgPC}",
            "icon": "computer"
            }
    ]

/* MOSTRAR PRODUCTOS + CONTADOR SUMA/RESTA CLASE 6
    // const mostrarProductos = new Promise((resolve, reject) => {
    //     if (productos.length > 0) {
    //         setTimeout(() => {
    //             resolve(productos)
    //         }, 5000)
    //     } else {
    //         reject("No hay productos para mostrar")
    //     }
    // })

    // mostrarProductos
    //     .then((resultado) => {
    //         console.log(resultado)
    //     }) 
    //     .catch((error) => {
    //         console.log(error)
    //     })
    
    // const [contador, setContador] = useState(0)
    
    // const sumar = () => {
    //     if (contador < 10) {
    //     setContador(contador + 1)
    //     } 
    // }
    
    // const restar = () => {
    //     if (contador > 0) {
    //     setContador(contador - 1)
    //     } 
    // }
Clase 6 */

/* Fetching CLASE7
    const getProducts = async () => {
        // const response = await fetch("https://fakestoreapi.com/products")
        const response = await fetch('stock.json')
        const data = await response.json()
        
        return data
    }

    const [product, setProduct] = useState([])

    useEffect(()=> {
        getProducts().then((product)=> setProduct(product))
    }, [])
Fetching */

    const { categoryId } = useParams()

    let productFiltered = product.filter((prod) => prod.category === categoryId)

    if ( categoryId === "Todos" ) {
        productFiltered = product
    } else if ( categoryId === undefined ) {
        productFiltered = product
    }

    return (
        <div className='row-productItem'>
            <ItemList productFiltered={productFiltered}/>
        </div>
    )
}

export default ItemListContainer