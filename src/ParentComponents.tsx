import { Button } from "@mui/material"
import { useCallback, useState } from "react"
import Child from "./Child"

const ParentComponents = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCountertwo] = useState(0);
    const handleIncrement = () => {
        setCounterOne(counterOne + 1)
    }
    const functionSecond = useCallback(() => {
        setCountertwo(counterTwo + 1)
    }, [counterTwo])
    return (
        <div>
            <h3>ParentComponents</h3>
            <Button onClick={handleIncrement}>FirstCount</Button>
            <h1>Count:{counterOne}</h1>
            <Child counterTwo={counterTwo} functionSecond={functionSecond} />
        </div>
    )
}

export default ParentComponents