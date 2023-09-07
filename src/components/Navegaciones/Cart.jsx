import React from 'react'

const itemCarroEjemplo = [
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

const products = itemCarroEjemplo.filter((p) => p.category === "Perifericos")

// const quitar = (p) => {products.slice(products.indexOf(p) -1 , products.indexOf(p))   }
const quitar = () => {products.slice(0, 1)}

const Cart = () => {
  return (
    <div className='carro-container'>
      <div className='carro'>
        {products.map((p) => {
          return (
            <div key={p.id} className='item-carro'>
                          <h2>X2</h2>
                          <span className="material-symbols-outlined"> {p.icon} </span>
                          <h1>Title {p.title}</h1>
                          <p>$ {p.price}</p>
                          <button onClick={quitar}>Quitar ✖</button>
                      </div>
                  )
        })}
      </div>
    </div>
  )
}

export default Cart