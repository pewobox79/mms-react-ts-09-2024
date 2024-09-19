import { useState } from "react"
import RenderingItem3 from "./RenderingItem3";


function RenderingExercise({children}:{children: React.ReactNode}) {


    const [value, setValue] = useState(false);

    function handleChange(){
        setValue(!value)
    }

    console.log("wrapper rendering")

    return (
        <div style={{border: "1px solid black"}}>
            <h3>Render Exercise</h3>
            <button onClick={handleChange}>change value</button>
            {children}
            <RenderingItem3/>
            </div>
    )
}

export default RenderingExercise