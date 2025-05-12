import { useState } from 'react'
import './App.css'
import HomePage from './landingPage/home/HomePage'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from "./landingPage/signup/Signup"
import PricingPage from "./landingPage/pricing/PricingPage"

import AboutPage from "./landingPage/about/AboutPage"
import SupportPage from "./landingPage/support/SupportPage"
import ProductsPage from "./landingPage/products/ProductsPage"
import Navbar from './landingPage/Navbar'
import Footer from './landingPage/Footer'
import NotFound from './landingPage/notfound'
function App() {
  


  return (
    <>
<BrowserRouter>
 <Navbar/>
<Routes>
<Route  path="/" element={<HomePage/>} ></Route>
<Route  path="/signup" element={<Signup/>} ></Route>
<Route  path="/pricing" element={<PricingPage/>} ></Route>
<Route  path="/support" element={<SupportPage/>} ></Route>
<Route  path="/about" element={<AboutPage/>} ></Route>
<Route  path="/products" element={<ProductsPage/>} ></Route>
<Route  path="*" element={<NotFound/>} ></Route>


</Routes>
<Footer/>
</BrowserRouter>
    
    </>
  )
}

export default App
