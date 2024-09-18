
import Button from '../components/Button'
import Button2 from '../components/Button2/Button2'
import ControllerExercise from '../components/ControllerExercise'

function Homepage() {

    function handleClick(name:string | number){
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
<hr/>
        
        
        <Button2 
        style ={{backgroundColor:"red",
        color:"white",
        borderColor:"green",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "3px 3px black"
    }}
        title="Download"
        />

<ControllerExercise/>
    </>

}

export default Homepage