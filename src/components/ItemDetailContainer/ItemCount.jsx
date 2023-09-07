import useCounter from '../useCounter'


const ItemCount = () => {

    const {count, increment, decrement, reset} = useCounter(0, 1, 10)

    return (
        <>
            <div className='control-items-details'>
                <button onClick={decrement}>-</button>
                <button onClick={reset} className='central-button-details'>Agregar</button>
                {/* <button onClick={() => setContador(0)} className='central-button'>Agregar</button> */}
                <button onClick={increment}>+</button>
            </div>
            <p className='contadorSuma-details'>{count}</p>
        </>
    )
}

export default ItemCount