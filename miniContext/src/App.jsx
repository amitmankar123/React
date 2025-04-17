import { useState } from 'react'
import Login from './component/Login'
import Profile from './component/Profile'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
  <UserContextProvider>
    <Login />
    <Profile />

    </UserContextProvider>
  )
}

export default App
