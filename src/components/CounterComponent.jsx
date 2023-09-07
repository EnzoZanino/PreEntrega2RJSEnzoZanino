import useCounter from "./useCounter"

const CounterComponent = () => {
    const {count, increment, decrement, reset} = useCounter(0, 1, 10)
    
    return (
        <div>CounterComponent</div>
    )
}