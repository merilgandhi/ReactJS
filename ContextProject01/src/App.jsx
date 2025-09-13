import React from 'react'
import UserContextProvider from './context/usercontextprovider'
import './App.css'
import Profile from './Components/Profile'
import Login from './Components/login'

function App() {


  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
