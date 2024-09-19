import React, { useState, useContext } from 'react'
import { UserContext } from '../store/UserContext';
import * as yup from 'yup'
import { useLocalStorage } from '../hooks/useLocalStorage';


function LoginPage() {

    const { setStoredValue } = useLocalStorage("mms-user");
    
    const myContext = useContext(UserContext);

    const INIT_VALUES = { email: "", password: "", state: false };
    const [user, setUser] = useState(INIT_VALUES);
    function handleChange(event: { target: { name: string, value: string } }) {
        setUser({ ...user, [event.target.name]: event.target.value })
        console.log("handled", user)
    }


    //validation setup

    const [errMsg, setErrMsg] = useState({ email: "", password: "" });
    const LoginSchema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(8, "Too short")

    })


    //validation setup end



    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        try {
            await LoginSchema.validate(user, { abortEarly: false })
            //context update
            const userData = { ...user, state: true }
            setStoredValue(userData)
            myContext.setUser(userData)
            setUser(INIT_VALUES)

        } catch (err) {

            if (err instanceof yup.ValidationError) {
                const newErrors = err.inner.reduce((acc, currentError) => {

                    acc[currentError.path] = currentError.message;
                    return acc;
                }, {})

                setErrMsg(newErrors)
            }

        }
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
                    onChange={handleChange}
                    style={{ borderColor: errMsg.email ? "red" : "" }} />
                {errMsg?.email && <p>{errMsg?.email}</p>}
                <br />
                <label htmlFor='password'>Password</label>
                <br />
                <input
                    type="text"
                    name="password"
                    id="password"
                    value={user.password}
                    placeholder="sicheres password"
                    style={{ borderColor: errMsg.password ? "red" : "" }}
                    onChange={handleChange} />
                {errMsg?.password && <p>{errMsg?.password}</p>}
                <br />
                <button type="submit">login</button>
            </form>





        </div>
    )
}

export default LoginPage