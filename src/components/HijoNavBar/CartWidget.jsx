import { useState } from 'react'
import React from 'react'
import imgButton from '../../assets/img/carrito-de-supermercado.png'

const CartWidget = () => {

    // const ContenedorComprando = document.querySelector(.contenedorComprando)

    const [contadorCarrito, setContadorCarrito] = useState(0)

    const contadorMas = (evt) => {
        evt.preventDefault()
        setContadorCarrito((contador) => contador + 1)
    }


    return (
        <div className='contenedorCarrito'>
            <button /* onClick={contadorMas} */ className='buttonCarrito'>
            <span className='material-symbols-outlined'>shopping_cart</span>
            <p className='numeroCarrito'>{contadorCarrito}</p>
            </button>
        </div>
    )
}

export default CartWidget