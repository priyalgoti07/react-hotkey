import { Button } from "@mui/material";
import React, { memo } from "react";
interface ChildComponents {
    counterTwo: number;
    functionSecond: () => void;
}

const Child: React.FC<ChildComponents> = ({ counterTwo, functionSecond }) => {
    console.log("children", counterTwo, functionSecond);

    return (
        <div>
            <h3>SecondComponents</h3>
            <Button onClick={functionSecond}>SecondCount</Button>
            <h1>Count:{counterTwo}</h1>
        </div>
    )
}

export default memo(Child);