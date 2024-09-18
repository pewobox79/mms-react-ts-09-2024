import { useEffect, useState } from 'react'

function ControllerExercise() {

    const [user, setUser] = useState(1) //=> value der User Id 
    const [selectedUser, setSelectedUser] = useState({ name: "", email: "", phone: "" })

    useEffect(() => {

        const controller = new AbortController();
        const signal = controller.signal

        fetch(`https://jsonplaceholder.typicode.com/users/${user}`, {signal: signal})
            .then(res => res.json())
            .then(data => setSelectedUser(data))

            return ()=>{

                controller.abort()
            }

    }, [user])



    return (
        <div>
            <h2>ControllerExercise</h2>

            <div>
                <h4>{selectedUser.name}</h4>
                <p>Email: {selectedUser.email}</p>
                <p>Phone: {selectedUser.phone}</p>
            </div>


            <div onClick={() => setUser(1)}>User 1</div>
            <div onClick={() => setUser(2)}>User 2</div>
            <div onClick={() => setUser(3)}>User 3</div>
            <div onClick={() => setUser(4)}>User 4</div>

        </div>
    )
}

export default ControllerExercise