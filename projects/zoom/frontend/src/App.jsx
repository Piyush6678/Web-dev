import React from 'react'
import "./App.css"
import {BrowserRouter, Route, Routes} from  "react-router-dom"
import LandingPage from './pages/landing'
import VideoMeet from './pages/VideoMeet'
import History from './pages/History'
import Home from './pages/Home'
import Authentication from './pages/Authentication'
export default function App() {
  return (
    <div className='App' >
      
<BrowserRouter>
        {/* <AuthProvider/> */}
<Routes>
    <Route path='/' element={<LandingPage/>}  />
    <Route path='/auth' element={<Authentication/>}  />
    <Route path='/home' element={<Home/>}  />
    <Route path='/history' element={<History/>}  />
    <Route path='/:url' element={<VideoMeet/>}  />

    
</Routes>

</BrowserRouter>


    </div>
  )
}
