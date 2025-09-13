import React,{useContext, useState} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")   
    const {setUser} = useContext(UserContext)

    const handlesubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})
    }
    return (
        <div>
            <h2>Login</h2>
            <label >Enter Username: </label>
            <input type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='username' />
            <br />
            <br />
            <label >Enter Password: </label>
            <input type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='password'/>
            <br />
            <br />
            <button onClick={handlesubmit} >Submit </button>
        </div>
    )
}

export default Login
