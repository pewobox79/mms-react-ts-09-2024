
import Button from '../components/Button'
import Button2 from '../components/Button2/Button2'
import ControllerExercise from '../components/ControllerExercise'
import QueryExercise from '../components/exercises/QueryExercise'
import RefExercise from '../components/exercises/RefExercise'
import RenderingExercise from '../components/RenderingExercise'
import RenderingItem1 from '../components/RenderingExercise/RenderingItem1'
import RenderingItem2 from '../components/RenderingExercise/RenderingItem2'

function Homepage() {

    function handleClick(name: string | number) {
        console.log("button clicked", name)

        return name
    }

    return <>
        <h2>Homepage</h2>
        <Button
            action={handleClick}
            padding={[40]}>
            <>click mich</>
            <p>fjlksdj</p>
        </Button>
        <hr />


        <Button2
            style={{
                backgroundColor: "red",
                color: "white",
                borderColor: "green",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "3px 3px black"
            }}
            title="Download"
        />

        <ControllerExercise />

        <RenderingExercise>
            <RenderingItem1/>
            <RenderingItem2/>
        </RenderingExercise>

        <hr/>
        <RefExercise/>

        <hr/>
        <QueryExercise/>
    </>

}

export default Homepage