import React,{useState} from 'react'

function LoginPage() {

    const INIT_VALUES = { email: "", password: "" }

    const [user, setUser] = useState(INIT_VALUES)

    function handleChange(event:{target:{name:string, value: string}}) {
        setUser({...user, [event.target.name]:event.target.value})
        
        console.log("handled", user)
    }

    function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log("submitted", user)
        setUser(INIT_VALUES)
    }

    console.log("my user", user)
    return (
        <div><h3>LoginPage</h3>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <br />
                <input
                    id="email"
                    type="text"
                    name="email"
                    value={user.email}
                    placeholder="Deine Email"
                    onChange={handleChange} />
                <br />
                <label htmlFor='password'>Password</label>
                <br />
                <input
                    type="text"
                    name="password"
                    id="password"
                    value={user.password}
                    placeholder="sicheres password"
                    onChange={handleChange} />
                <br />
                <button type="submit">login</button>
            </form>





        </div>
    )
}

export default LoginPage