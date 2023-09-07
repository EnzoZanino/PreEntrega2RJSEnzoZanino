import React from 'react'
import Item from './Item'
import "../main.css"

const ItemList = ({productFiltered}) => {
    return (
        <>
            {
                productFiltered.map((p) => {
                    return (
                            <Item key={p.id} prod={p}/>
                        )
                })
            }
        </>
    )
}

export default ItemList