import useCounter from '../useCounter'
import "../main.css"
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'

const ItemDetail = ({producto}) => {

    const { id } = useParams()

    const filteredProducts = producto.filter((prod) => prod.id == id)

    return (
        <>
            {filteredProducts.map((p) => {
                return (
                    <div key={p.id} className='product-item-details'>
                        <span className="material-symbols-outlined"> {p.icon} </span>
                        <h1>{p.title}</h1>
                        <h2>Description {p.descripcion}</h2>
                        <p>$ {p.price}</p>
                        <ItemCount />
                    </div>
                )
            })}
        </>
    )
}

export default ItemDetail