import { useState } from "react";

function CounterButton({ color }) {
    const [ count, setCount ] = useState(0)

    return (
        <button color={color} onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    )
}

export default CounterButton