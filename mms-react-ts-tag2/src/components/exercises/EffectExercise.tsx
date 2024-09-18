import { useState, useEffect } from "react"
function EffectExercise() {

    const [posts, setPosts] = useState(0)

    useEffect(() => {

        console.log("effect runs")
        const interval = setInterval(() => {
            setPosts(prev => prev + 1)
        }, 1000)

        //cleanup function
        return () => {
            console.log("clear runs")
            clearInterval(interval)
        }

    }, [posts])

    return (
        <div>Effect Exercise<br />
            <h3>{posts}</h3>
            <button onClick={() => setPosts(prev => prev + 1)}>inc</button>

        </div>
    )
}

export default EffectExercise