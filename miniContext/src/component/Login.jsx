import React ,{useContext, useState} from "react";
import UserContextProvider from "../Context/UserContextProvider";
import UserContext from "../Context/UserContext";
function Login(){
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')
    const{setUser} = useContext(UserContext)
  function handleSubmit(e){
    e.preventDefault()
    setUser({username,password})  

  }
    return(
        <div>
        <h1>Login</h1>
      <input type="text" 
      onChange={(e)=>setUsername(e.target.value)}
       placeholder="username"
        />
      <input 
      type="text" 
      onChange={(e)=>setpassword(e.target.value)}
      placeholder="password" />
      <button 
       
      onClick={handleSubmit}
      >submit</button> 
      </div>
    )
}
export default Login