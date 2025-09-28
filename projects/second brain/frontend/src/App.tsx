
import { DashBoard } from "./pages/dashboard";
import { Signin } from "./pages/signin";
import { Signup } from "./pages/signup";
import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
    return <BrowserRouter>
    
    <Routes>  <Route path="/user/signup" element={<Signup/>} />
        <Route path="/user/signin" element={<Signin/>} />
        <Route path="/dashboard" element={<DashBoard/>} />
    </Routes>
      
    </BrowserRouter>


 
}

export default App;
