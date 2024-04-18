import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import View from './View'
import Register from './Register'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header/>
<Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='/view' element={<View/>}/>
</Routes>


  
    </>
  )
}

export default App
